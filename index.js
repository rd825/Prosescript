// imports
require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const logger = require('morgan');
const axios = require('axios');

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

server.post('/api/code', (req, res) => {
    const {code} = req.body;
    console.log(code);
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
    .then(res => console.log(res))
    .catch(err => console.log(err));
})

const port = process.env.PORT || 9000;
server.listen(port, () => console.log(`Listening on http://localhost:${port}`));