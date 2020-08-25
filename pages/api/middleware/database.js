import { Pool } from "pg";
import nextConnect from 'next-connect';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

async function database(req, res, next) {
  req.db = {}
  req.db.query = (text, params) => pool.query(text, params)

  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;

