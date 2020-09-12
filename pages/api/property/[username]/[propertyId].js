import nextConnect from "next-connect";
import database from "../../middleware/database";

const handler = nextConnect();
handler.use(database);

handler.get(async (req, res) => {
  const {
    query: { propertyId, username },
  } = req;

  let property = null;
  let otherProperties = [];
  let attachments = [];

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
        u.country as "userCountry",
        u."smallBio" as "userSmallBio"
      FROM public.property as p
        INNER JOIN public.user as u on u.id = p."userId"
      WHERE p.status in ('ACTIVE', 'SOLD') and p."publishedStatus" = 'PUBLISHED' and p.uuid = $1`,
      [propertyId]
    );

    if (data.rows.length <= 0) {
      return res.status(400).json({ message: "property not found" });
    }
    property = data.rows[0];

    // OTHER PROPERTIES FROM USER
    try {
      const dataOther = await req.db.query(
        `Select title, uuid, bedrooms, bathrooms, price, "mainPictureLowRes", currency, status, city
        from public.property
        where username = $1 and 
          uuid <> $2 and 
          "publishedStatus" = 'PUBLISHED' and
          status = 'ACTIVE'
        ORDER BY "updatedAt" desc
        limit 6`,
        [username, propertyId]
      );

      if (dataOther.rows.length <= 0) {
        otherProperties = [];
      }

      otherProperties = dataOther.rows;
    } catch (err) {
      otherProperties = [];
    }

    // ATTACHMENTS
    try {
      const dataAttachments = await req.db.query(
        `Select *
        from public.attachments
        where "propertyId" = $1 and active=true
        ORDER BY "updatedAt" desc`,
        [property.id]
      );

      if (dataAttachments.rows.length <= 0) {
        attachments = [];
      }

      attachments = dataAttachments.rows;
    } catch (err) {
      attachments = [];
    }

    res.json({
      property,
      otherProperties,
      attachments,
    });
  } catch (err) {
    res.status(500).json({ message: "Error getting Property" });
  }
});

export default handler;
