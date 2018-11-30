require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const logger = require('morgan');

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(logger('dev'));

const clientsecret = process.env.CLIENT_SECRET;

server.get('/', (req, res) => res.send({API: 'live'}))

server.post('/api/code', (req, res) => {
    console.log(req.body);
    res.send('Success')
})


const port = process.env.PORT || 9000;
server.listen(port, () => console.log(`Listening on http://localhost:${port}`));