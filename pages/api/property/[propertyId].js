import nextConnect from "next-connect";
import database from "../middleware/database";

const handler = nextConnect();
handler.use(database);

handler.get(async (req, res) => {
  const {
    query: { propertyId },
  } = req;

  try {
    const data = await req.db.query(
      `SELECT * FROM public.property WHERE status in ('ACTIVE', 'SOLD') and "publishedStatus" = 'PUBLISHED' and uuid = $1`,
      [propertyId]
    );

    if (data.rows.length <= 0) {
      return res.status(400).json({ message: "property not found" });
    }

    res.json(data.rows[0]);
  } catch (err) {
    res.status(500).json({ message: "Error getting Property" });
  }
});

export default handler;
