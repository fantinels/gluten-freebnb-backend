require('dotenv').config();

const { Pool } = require("pg");

async function connect() {

  const pool = new Pool({
    connectionString: process.env.CONNECTION_STRING,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  const client = await pool.connect();

  client.release();

  return pool.connect();
}

module.exports = connect
