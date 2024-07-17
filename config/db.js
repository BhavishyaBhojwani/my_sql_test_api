const mysql = require('mysql');

// Create a connection to the MySQL database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'to_do_app',
});

module.exports = db;
    