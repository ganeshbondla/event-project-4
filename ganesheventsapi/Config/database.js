const mysql = require("mysql");
require("dotenv").config();

const creatingConnection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

creatingConnection.connect((err, results) => {
  if (err) {
    console.log("Database Connection Failed!");
  } else {
    console.log("Database Connection Success!");
  }
});

module.exports = creatingConnection;
