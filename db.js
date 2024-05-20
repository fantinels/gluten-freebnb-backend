// const { Pool } = require("pg");

// async function connect() {

//   const pool = new Pool({
//     connectionString: process.env.CONNECTION_STRING,
//   });

//   const client = await pool.connect();

//   client.release();

//   return pool.connect();
// }

// module.exports = connect

const mongoose = require("mongoose");

require("dotenv").config()

mongoose.set("strictQuery", true);

async function main() {
 client = await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.fgmxcmj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
  console.log("Conectado com sucesso!")
}

main().catch((err) => console.log(err));

module.exports = main;
