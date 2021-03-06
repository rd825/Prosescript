require("dotenv").config();

module.exports = {
  user: "prosescript@outlook.com",
  password: process.env.OUTLOOK_PW,
  host: "imap-mail.outlook.com",
  port: 993,
  tls: true, // use secure connection
  tlsOptions: { rejectUnauthorized: false }
};
