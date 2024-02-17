const mysql = require("mysql2");

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123",
  port: 3306,
  database: "githubdb",
});

module.exports = conn;