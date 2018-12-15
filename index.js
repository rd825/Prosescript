// importing relevant packages
const express = require('express');
const axios = require('axios');
const notifier = require('mail-notifier');
const Cryptr = require('cryptr');
const users = require('./db/userModel');

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
                expires_at: expires_at
            }

            users.getByUsername(username)
                .then(userExists => {
                    if (userExists) {
                        console.log({message: 'User already exists'})
                    } else {
                        users.insert(user)
                        .then(res => {
                            console.log(res);
                        })
                        .catch(err => {
                            console.log(err);
                        })
                    }
                })
                .catch(err => console.log({message: 'Error finding user'}))
        })
        .catch(err => console.log({message: "User authentication error"}));
    })
    .catch(err => console.log({message: "Token exchange error"}));
})


// If Date.now() <= expiresAt --> do the process for refresh token
function refresh() {
    // get refresh_token from db
    // const refresh_token = cryptr.decrypt(token)
    axios({
        method: 'post',
        url: 'https://api.medium.com/v1/tokens',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8'
        },
        data: `refresh_token=${refresh_token}&client_id=${client_id}
        &client_secret=${client_secret}&grant_type=refresh_token`
    })
    .then(res => {
        // throw the below in the DB
        //accessT = cryptr.encrypt(access_token);
    }) 
    .catch(err => console.log(err));
}

function create() {
    axios({
        method: 'post',
        url: `https://api.medium.com/v1/users/${authorId}/posts`,
        headers: {
            'Authorization': `Bearer ${access_token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8'
        },
        data: {
            "contentFormat": "html", // or Markdown
            "title": title,
            "content": content,
            "tags": tags.split(','),
            "publishStatus": "public",
            "notifyFollowers": true,
        }
    })
    .then(res => {
        console.log(res.data)
    })
    .catch(err => console.log(err));
};

const imap = {
    user: 'prosescriptapp@gmail.com',
    password: process.env.IMAP_PW,
    host: 'imap.gmail.com',
    port: 993,
    tls: true,// use secure connection
    tlsOptions: { rejectUnauthorized: false }
};

const n = notifier(imap);
n.on('end', () => n.start()) // session closed
  .on('mail', mail => {
      console.log(mail);
      /**
       * what needs to be done?
       * check if token has expired
       * if so, refresh
       * if not, proceed
       * get the sender's email address
       * acquire the matching id, token, and token type
       * grab the title and content
       * put together the axios request and send it
       */
    
  })
  .start();

const port = process.env.PORT || 9000;
server.listen(port, () => console.log(`Listening on http://localhost:${port}`));