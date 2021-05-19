const consoletable = require('console.table')
const inquirer = require('inquirer')
const mysql = require('mysql');
const { promptUser } = require('.');

const viewDepartments = () => {
    console.log('Showing all departments...\n');
    const query = 'SELECT * FROM department';
    connection.query(query, (err, res) => {
        console.table(res);
        if (err) throw err;
        promptUser();
    });
}

module.export = {viewDepartments}
