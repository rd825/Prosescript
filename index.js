const express = require('express');
const server = express();
server.use(express.json());

const clientsecret = '835da83c7b32b92defab1f4184960c9efa222331'


const port = process.env.PORT || 9000;
server.listen(port, () => console.log(`Listening on http://localhost:${port}`));