const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, '../logs/test.log');

// Ensure logs directory exists
if (!fs.existsSync(path.dirname(logFilePath))) {
  fs.mkdirSync(path.dirname(logFilePath), { recursive: true });
}

function log(message, writeToFile = true) {
  const timestamp = new Date().toISOString();
  const formatted = `[${timestamp}] ${message}`;
  
  // Console output
  console.log(formatted);

  // Optional file output
  if (writeToFile) {
    fs.appendFileSync(logFilePath, formatted + '\n');
  }
}

module.exports = { log };
