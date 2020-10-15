'use strict';
const host = 'raja.db.elephantsql.com';
const database = 'cxvpvqsy';
const user = 'cxvpvqsy';
const password = 'sA3I5Ijvb-V3QPbxvH5BJRM_P3moDHxs';

const pgp = require('pg-promise')({
    query: function (event) {
        console.log('QUERY: ', event.query);
    },
});

const options = {
    host: host,
    database: database,
    user: user,
    password: password,
};

const db = pgp(options);

module.exports = db;
