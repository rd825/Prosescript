const db = require('./dbConfig');

async function insert(user) {
    return await db('users').returning('id').insert(user);
}

async function getByUsername(username) {
    return await db('users').where('username', username);
}

async function getByEmail(email) {
    return await db('users').where('email', email);
}

module.exports = {
    insert,
    getByUsername,
    getByEmail
};