const express = require('express');
const server = express();
server.use(express.json());


const port = process.env.PORT || 9000;
server.listen(port, () => console.log(`Listening on http://localhost:${port}`));