import nextConnect from "next-connect";
import database from "./middleware/database";
import { getVisitorCookie } from "./utils";
import { v4 as uuidv4 } from "uuid";

const handler = nextConnect();
handler.use(database);

handler.post(async (req, res) => {
  const { email, name, uuid, phone, type, username } = req.body;

  if (!email) return res.status(400).json({ message: "email not found" });
  if (!name) return res.status(400).json({ message: "name not found" });
  if (!phone) return res.status(400).json({ message: "phone not found" });

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

      let visitorId = getVisitorCookie(req);

      if (!visitorId) {
        visitorId = uuidv4();
      }

      const leadData = await req.db.query(
        `SELECT * FROM public.lead WHERE "visitorId" = $1 and "userId" = $2`,
        [visitorId, userId]
      );

      if (leadData.rows.length <= 0) {
        const data = await req.db.query(
          `INSERT INTO lead(email, "userId", phone, name, "visitorId", "leadStatus", type) 
           VALUES($1, $2, $3, $4, $5, 'PENDING', 'USER') RETURNING "userId", "visitorId"`,
          [email, userId, phone, name, visitorId]
        );

        if (data.rows.length <= 0) {
          return res.status(400).json({ message: "Lead not found" });
        }

        res.json({ st: "ok" });
      } else {
        await req.db.query(
          `UPDATE lead SET email=$1, phone=$2, name=$3 WHERE "visitorId" = $4 and "userId" = $5 and type = 'USER'`,
          [email, phone, name, visitorId, userId]
        );

        res.json({ st: "ok" });
      }
    } else {
      const userData = await req.db.query(
        `SELECT id FROM public.user WHERE username = $1`,
        [username]
      );

      if (userData.rows.length <= 0) {
        return res.status(400).json({ message: "User not found" });
      }

      const userId = userData.rows[0].id;

      const propertyData = await req.db.query(
        `SELECT id FROM public.property WHERE status in ('ACTIVE', 'SOLD') and "publishedStatus" = 'PUBLISHED' and uuid = $1`,
        [uuid]
      );

      if (propertyData.rows.length <= 0) {
        return res.status(400).json({ message: "Property not found" });
      }

      const propertyId = propertyData.rows[0].id;

      let visitorId = getVisitorCookie(req);

      if (!visitorId) {
        visitorId = uuidv4();
      }

      const leadData = await req.db.query(
        `SELECT * FROM public.lead WHERE "visitorId" = $1 and "propertyId" = $2`,
        [visitorId, propertyId]
      );

      if (leadData.rows.length <= 0) {
        const data = await req.db.query(
          `INSERT INTO lead(email, "propertyId", phone, name, "visitorId", "leadStatus", type, "userId") 
           VALUES($1, $2, $3, $4, $5, 'PENDING', 'PROPERTY', $6) RETURNING "propertyId", "visitorId"`,
          [email, propertyId, phone, name, visitorId, userId]
        );

        if (data.rows.length <= 0) {
          return res.status(400).json({ message: "Lead not found" });
        }

        res.json({ st: "ok" });
      } else {
        await req.db.query(
          `UPDATE lead SET email=$1, phone=$3, name=$4, "userId"=$6 WHERE "visitorId" = $5 and "propertyId" = $2 and type = 'PROPERTY'
          `,
          [email, propertyId, phone, name, visitorId, userId]
        );

        res.json({ st: "ok" });
      }
    }
  } catch (err) {
    res.status(500).json({ message: "Error creating lead " + err });
  }
});

export default handler;
