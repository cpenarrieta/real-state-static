import nextConnect from "next-connect";
import database from "../../middleware/database";

const handler = nextConnect();
handler.use(database);

handler.get(async (req, res) => {
  const {
    query: { propertyId, username },
  } = req;

  try {
    const data = await req.db.query(
      `Select title, uuid, bedrooms, bathrooms, price, "mainPicture", currency, status, city
      from public.property
      where username = $1 and 
        uuid <> $2 and 
        "publishedStatus" = 'PUBLISHED' and
        status = 'ACTIVE'
      ORDER BY "updatedAt" desc
      limit 6`,
      [username, propertyId]
    );

    if (data.rows.length <= 0) {
      return res.json([]);
    }

    res.json(data.rows);
  } catch (err) {
    res.status(500).json({ message: "Error getting Other Properties" });
  }
});

export default handler;
