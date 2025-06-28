const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

// Email config
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "anishkr90@gmail.com",       // 🔁 Replace with your Gmail
    pass: "iqpz tzou gdtc noje",          // 🔁 Use App Password, not regular password
  },
});

// Report file path
const reportPath = path.join(__dirname, "playwright-report", "index.html");
const reportHTML = fs.readFileSync(reportPath, { encoding: "utf8" });

// Email options
const mailOptions = {
  from: '"Playwright Report" <anishkr90@gmail.com>',
  to: "anishkr90@gmail.com",      // 🔁 Replace with recipient
  subject: "Playwright Test Report",
  html: reportHTML,                       // Send HTML directly
  attachments: [
    {
      filename: "Playwright-Report.html",
      path: reportPath,                   // Send as attachment also
    },
  ],
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log("Error sending mail:", error);
  }
  console.log("Email sent:", info.response);
});
