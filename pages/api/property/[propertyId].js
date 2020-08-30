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
      `SELECT p.*,
        u.email as "userEmail", 
        u."firstName" as "userFirstName", 
        u."lastName" as "userLastName", 
        u.phone as "userPhone", 
        u.picture as "userPicture", 
        u."pictureLowRes" as "userPictureLowRes",
        u.address1 as "userAddress1", 
        u.address2 as "userAddress2", 
        u.city as "userCity", 
        u.province as "userProvince", 
        u."zipCode" as "userZipcode", 
        u.country as "userCountry"
      FROM public.property as p
        INNER JOIN public.user as u on u.id = p."userId"
      WHERE p.status in ('ACTIVE', 'SOLD') and p."publishedStatus" = 'PUBLISHED' and p.uuid = $1`,
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
