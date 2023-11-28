const mysql = require("mysql2/promise");
require("dotenv").config();

const Connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "todolist",
});

module.exports = Connection;
