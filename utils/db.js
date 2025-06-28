const mysql = require('mysql2/promise');

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',  // XAMPP default
  database: '_sms'
};

// Function to check user existence
async function isUserExists(username) {
  const connection = await mysql.createConnection(dbConfig);
  const [rows] = await connection.execute('SELECT * FROM notice WHERE title = ?', [username]);
  await connection.end();
  return rows.length > 0;  // true agar user mil gaya, false otherwise
}

module.exports = {
  isUserExists
};
