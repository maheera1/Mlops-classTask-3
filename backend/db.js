const pgp = require("pg-promise")();
require("dotenv").config();

const db = pgp(process.env.DATABASE_URL);

db.connect()
  .then(() => console.log("✅ Connected to PostgreSQL (Neon)"))
  .catch(err => console.error("❌ PostgreSQL connection error", err));

module.exports = db;
