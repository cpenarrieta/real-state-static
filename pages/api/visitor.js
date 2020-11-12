import nextConnect from "next-connect";
import database from "./middleware/database";
import { serialize } from "cookie";
import { v4 as uuidv4 } from "uuid";
import { getVisitorCookie } from "./utils";

const COOKIE_NAME = "visitorId";
const MAX_AGE = 2147483647;

const setVisitorCookie = (res, visitorId) => {
  const cookie = serialize(COOKIE_NAME, visitorId, {
    maxAge: MAX_AGE,
    expires: new Date(Date.now() + MAX_AGE * 1000),
    maxAge: MAX_AGE,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    sameSite: "lax",
  });

  res.setHeader("Set-Cookie", cookie);
};

const handler = nextConnect();
handler.use(database);

handler.post(async (req, res) => {
  const { uuid, username, type } = req.body;

  if (!uuid && type === "PROPERTY")
    return res.status(400).json({ message: "uuid not found" });
  if (!username && type === "USER")
    return res.status(400).json({ message: "uuid not found" });

  let visitorId = getVisitorCookie(req);
  if (!visitorId) {
    visitorId = uuidv4();
  }

  try {
    if (type === "USER") {
      const userData = await req.db.query(
        `SELECT id FROM public.user WHERE username = $1`,
        [username]
      );

      if (userData.rows.length <= 0) {
        return res.status(400).json({ message: "User not found" });
      }

      const userId = userData.rows[0].id;

      const data = await req.db.query(
        `INSERT INTO visitor("visitorId", "userId", type) VALUES($1, $2, 'USER') RETURNING "visitorId"`,
        [visitorId, userId]
      );

      if (data.rows.length <= 0) {
        return res.status(400).json({ message: "visitor not found" });
      }
    } else {
      const propertyData = await req.db.query(
        `SELECT id FROM public.property WHERE status in ('ACTIVE', 'SOLD') and "publishedStatus" = 'PUBLISHED' and uuid = $1`,
        [uuid]
      );

      if (propertyData.rows.length <= 0) {
        return res.status(400).json({ message: "Property not found" });
      }

      const propertyId = propertyData.rows[0].id;

      const userData = await req.db.query(
        `SELECT id FROM public.user WHERE username = $1`,
        [username]
      );

      if (userData.rows.length <= 0) {
        return res.status(400).json({ message: "User not found" });
      }

      const userId = userData.rows[0].id;

      const data = await req.db.query(
        `INSERT INTO visitor("visitorId", "propertyId", "userId") VALUES($1, $2, $3) RETURNING "visitorId"`,
        [visitorId, propertyId, userId]
      );

      if (data.rows.length <= 0) {
        return res.status(400).json({ message: "visitor not found" });
      }
    }

    setVisitorCookie(res, visitorId);

    res.json({ st: "ok" });
  } catch (err) {
    res.status(500).json({
      message: "Error creating Visitor",
    });
  }
});

export default handler;
