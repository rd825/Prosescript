const db = require('./dbConfig');

async function insert(user) {
    return await db('users').returning('id').insert(user);
}

async function getByUsername(username) {
    const user = await db('users').where('username', username).first();
    if (user) {
        return true
    } else {
        return false
    }
}

async function getByEmail(email) {
    return await db('users').where('email', email).first();
}

async function update(email, access_token, expires_at) {
    await db('users').where('email', email).update({
        access_token: access_token,
        expires_at: expires_at
    });
}

module.exports = {
    insert,
    getByUsername,
    getByEmail,
    update
};