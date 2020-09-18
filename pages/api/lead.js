import nextConnect from "next-connect";
import database from "./middleware/database";
import { getVisitorCookie } from "./utils";
import { v4 as uuidv4 } from "uuid";

const handler = nextConnect();
handler.use(database);

handler.post(async (req, res) => {
  const { email, name, uuid, phone } = req.body;

  if (!uuid) return res.status(400).json({ message: "uuid not found" });
  if (!email) return res.status(400).json({ message: "email not found" });
  if (!name) return res.status(400).json({ message: "name not found" });
  if (!phone) return res.status(400).json({ message: "phone not found" });

  try {
    const propertyData = await req.db.query(
      `SELECT * FROM public.property WHERE status in ('ACTIVE', 'SOLD') and "publishedStatus" = 'PUBLISHED' and uuid = $1`,
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
      `SELECT * FROM public.lead WHERE "visitorId" = $1`,
      [visitorId]
    );

    if (leadData.rows.length <= 0) {
      const data = await req.db.query(
        `INSERT INTO lead(email, "propertyId", phone, name, "visitorId", "leadStatus") 
         VALUES($1, $2, $3, $4, $5, 'PENDING') RETURNING "propertyId", "visitorId"`,
        [email, propertyId, phone, name, visitorId]
      );

      if (data.rows.length <= 0) {
        return res.status(400).json({ message: "Lead not found" });
      }

      res.json({ st: "ok" });
    } else {
      await req.db.query(
        `UPDATE lead SET email=$1, "propertyId"=$2, phone=$3, name=$4 WHERE "visitorId" = $5
        `,
        [email, propertyId, phone, name, visitorId]
      );

      res.json({ st: "ok" });
    }
  } catch (err) {
    res.status(500).json({ message: "Error creating lead" });
  }
});

export default handler;
