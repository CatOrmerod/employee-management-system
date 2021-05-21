const mysql = require('mysql');
const connection = require('./connection')
const { promptHandler } = require('./index')

const queryHandler = (query, params, table) => {
    connection.query(query, params, (err, res) => {
        if (table) console.table(res);
        if (err) throw err;
        promptHandler();
    });
};

module.exports = { queryHandler };