import nextConnect from "next-connect";
import database from "./middleware/database";

const handler = nextConnect();
handler.use(database);

handler.post(async (req, res) => {
  const { email, name, uuid, phone, visitorId } = req.body;

  if (!uuid) return res.status(400).json({ message: "uuid not found" });
  if (!email) return res.status(400).json({ message: "email not found" });
  if (!name) return res.status(400).json({ message: "name not found" });
  if (!phone) return res.status(400).json({ message: "phone not found" });

  try {
    const propertyData = await req.db.query(
      `SELECT * FROM public.property WHERE status = 'ACTIVE' and "publishedStatus" = 'PUBLISHED' and uuid = $1`,
      [uuid]
    );

    if (propertyData.rows.length <= 0) {
      return res.status(400).json({ message: "Property not found" });
    }

    const propertyId = propertyData.rows[0].id;

    const data = await req.db.query(
      `INSERT INTO lead(email, "propertyId", phone, name, "visitorId") VALUES($1, $2, $3, $4, $5) RETURNING "propertyId", "visitorId"`,
      [email, propertyId, phone, name, visitorId]
    );

    if (data.rows.length <= 0) {
      return res.status(400).json({ message: "user not found" });
    }

    res.json({ st: "ok" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error creating lead User" });
  }
});

export default handler;
