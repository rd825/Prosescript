// importing relevant packages
const express = require('express');
const axios = require('axios');
const notifier = require('mail-notifier');
const Cryptr = require('cryptr');
const users = require('./db/userModel');
const imap = require('./config/imapConfig');
const {create, refresh} = require('./helpers');

// setting up server + middleware
const server = express();
const configMW = require('./config/middleware');
configMW(server);

// bringing in env variables
require('dotenv').config();
const client_secret = process.env.CLIENT_SECRET;
const client_id = process.env.CLIENT_ID;
const redirect_uri = process.env.REDIRECT_URI;
const cryptr = new Cryptr(process.env.CRYPTR_SECRET);

// API status
server.get('/', (req, res) => res.send({API: 'live'}))

// Authenticate a user on Medium via OAuth
server.post('/api/auth', (req, res) => {
    const {code} = req.body;
    axios({
        method: 'post',
        url: 'https://api.medium.com/v1/tokens',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8'
        },
        data: `code=${code}&client_id=${client_id}&client_secret=${client_secret}&grant_type=authorization_code&redirect_uri=${redirect_uri}`
    })
    .then(res => {
        const {access_token, refresh_token, expires_at} = res.data;
        axios({
            method: 'get',
            url: 'https://api.medium.com/v1/me',
            headers: {
                'Authorization': `Bearer ${access_token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Accept-Charset': 'utf-8'
            }
        })
        .then(response => {
            const {id, username, name} = response.data.data;
            const user = {
                name: name,
                username: username,
                user_id: id,
                access_token: cryptr.encrypt(access_token),
                refresh_token: cryptr.encrypt(refresh_token),
                expires_at: expires_at,
            }
            
            users.getByUsername(username)
            .then(exists => {
                if (exists) {
                    console.log({message: 'User already exists'});
                } else {
                    users.insert(user)
                    .then(res => {console.log(res)})
                    .catch(err => {console.log(err)})
                }
                })
                .catch(err => console.log({message: 'Error finding user', err}));
        })
        .catch(err => console.log({message: "User authentication error", err}));
    })
    .catch(err => console.log({message: "Token exchange error", err}));
})

const n = notifier(imap);
n.on('end', () => n.start()) // session closed
    .on('mail', mail => {
        const {subject, html, text} = mail;
        const email = mail['from'][0]['address'];
        const mailObj = {
            title: subject,
            html: html,
            text: text,
            email: email,
        }

        users.getByEmail(email)
        .then(res => {
            const {user_id, access_token, refresh_token, expires_at} = res;
            const now = Date.now();

            const decrypted_access = cryptr.decrypt(access_token);
            const decrypted_refresh = cryptr.decrypt(refresh_token);

            if (now >= expires_at) {
                refresh(decrypted_refresh, client_id, client_secret, mailObj)
            } else {
                create(user_id, decrypted_access, mailObj)
            }
        })
        .catch(err => console.log(err));
})
.start();

const port = process.env.PORT || 9000;
server.listen(port, () => console.log(`Listening on http://localhost:${port}`));