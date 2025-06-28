const axios = require('axios');

// Replace with your real webhook URL
const webhookURL = 'https://chat.googleapis.com/v1/spaces/AAAA7Ja4Szw/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=jO1RxFjW_RnsOLtzex-2p9fFJG5X-HgiYgsWuvIfvaU';

// Replace with your real file sharing link (e.g., from Google Drive)
const reportLink = 'http://localhost:9323';

const message = {
  text: `✅ *Playwright Test Completed Successfully!*\n\n📄 *Test Report:* ${reportLink}`
};

axios.post(webhookURL, message)
  .then(() => {
    console.log("✅ Report message sent to Google Chat!");
  })
  .catch((error) => {
    console.error("❌ Failed to send message:", error);
  });
