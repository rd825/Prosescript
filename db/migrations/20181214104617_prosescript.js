
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments();
        tbl.string('name')
        tbl.string('username')
        tbl.string('email')
        tbl.string('passphrase')
        tbl.string('user_id')
        tbl.string('access_token')
        tbl.string('refresh_token')
        tbl.bigInteger('expires_at')
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};
