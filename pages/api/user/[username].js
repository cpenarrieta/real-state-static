import nextConnect from "next-connect";
import database from "../middleware/database";

const handler = nextConnect();
handler.use(database);

handler.get(async (req, res) => {
  const {
    query: { username },
  } = req;

  try {
    const data = await req.db.query(
      `SELECT * FROM public.user WHERE username = $1`,
      [username]
    );

    if (data.rows.length <= 0) {
      return res.status(400).json({ message: "user not found" });
    }

    res.json(data.rows[0]);
  } catch (err) {
    res.status(500).json({ message: "Error getting User" });
  }
});

export default handler;
