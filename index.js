// imports
require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const logger = require('morgan');
const axios = require('axios');
const bcrypt = require('bcryptjs');

// server + middleware
const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(logger('dev'));


// setting up env variables
const client_secret = process.env.CLIENT_SECRET;
const client_id = process.env.CLIENT_ID;
const redirect_uri = process.env.REDIRECT_URI;

server.get('/', (req, res) => res.send({API: 'live'}))

server.post('/api/oauth', (req, res) => {
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
        const {token_type, access_token} = res.data;
        axios({
            method: 'get',
            url: 'https://api.medium.com/v1/me',
            headers: {
                'Authorization': `${token_type} ${access_token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Accept-Charset': 'utf-8'
            }
        })
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
})

server.post('/api/create', (req, res) => {
    axios({
        method: 'post',
        url: `https://api.medium.com/v1/users/${authorId}/posts`,
        headers: {
            'Authorization': `${token_type} ${access_token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8'
        },
        data: {
            "contentFormat": "html", // or Markdown
            "title": "",
            "content": "",
            "tags": ["", "", ""],
            "publishStatus": "public",
            "notifyFollowers": true,

        }
    })
    .then(res => {
        console.log(res.data)
    })
    .catch(err => console.log(err));

})



const port = process.env.PORT || 9000;
server.listen(port, () => console.log(`Listening on http://localhost:${port}`));