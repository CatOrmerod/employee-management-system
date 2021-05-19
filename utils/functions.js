const consoletable = require('console.table')
const inquirer = require('inquirer')
const mysql = require('mysql');
const { promptUser } = require('.');

const viewDepartments = () => {
    const query = 'SELECT * FROM department';
    connection.query(query, (err, res) => {
        console.table(rows)
        promptUser();
    });
}

module.export = { viewDepartments }
