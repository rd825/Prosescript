require('dotenv').config();

module.exports = {
    user: 'prosescriptapp@gmail.com',
    password: process.env.IMAP_PW,
    host: 'imap.gmail.com',
    port: 993,
    tls: true,// use secure connection
    tlsOptions: { rejectUnauthorized: false }
};