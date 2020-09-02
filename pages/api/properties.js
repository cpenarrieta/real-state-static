import nextConnect from "next-connect";
import database from "./middleware/database";

const handler = nextConnect();
handler.use(database);

handler.get(async (req, res) => {
  try {
    const data = await req.db.query(
      `SELECT uuid, username FROM public.property WHERE status = 'ACTIVE' and "publishedStatus" = 'PUBLISHED'`
    );

    res.json(data.rows);
  } catch (err) {
    res.status(500).json({ message: "Error getting all Properties" });
  }
});

export default handler;
