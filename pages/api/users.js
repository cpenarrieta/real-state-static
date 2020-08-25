import nextConnect from "next-connect";
import database from "./middleware/database";

const handler = nextConnect();
handler.use(database);

handler.get(async (req, res) => {
  try {
    const data = await req.db.query(`SELECT * FROM public.user`);

    res.json(data.rows);
  } catch (err) {
    res.status(500).json({ message: "Error getting all Users" });
  }
});

export default handler;
