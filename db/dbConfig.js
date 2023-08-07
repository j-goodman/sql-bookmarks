const pgp = require("pg-promise")();
require("dotenv").config();

const cn = {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD
};

const db = pgp(cn);

console.log("Preparing to connect...")
db.connect()
.then((obj) => {
    console.log("Connecting...")
    // Can check the server version here (pg-promise v10.1.0+):
    const serverVersion = obj.client.serverVersion;
    console.log("Postgres connection established");
    obj.done(); // success, release the connection;
  })
  .catch((error) => {
    console.log("Connection failed.")
    console.log("ERROR:", error.message || error);
  });

module.exports = db;