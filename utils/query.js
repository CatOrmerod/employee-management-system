const connection = require('./connection')
const inquirer = require('inquirer')
const {  promptHandler } = require('./index');

const queryHandler = (query, params) => {
    //console.log(promptHandler)
    connection.query(query, params, (err, res) => {
        console.table(res);
        if (err) throw err;
    });
    //promptHandler()
};

const endPrompts = () => connection.end();

module.exports = { queryHandler, endPrompts };