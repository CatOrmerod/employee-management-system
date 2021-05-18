const mysql = require('mysql');
const inquirer = require('inquirer');
const consoletable = require('console.table')
const logo = require('asciiart-logo')

require('dotenv').config()

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DB
});

connection.connect((err) => {
    if (err) throw err;
    afterConnection();
});

afterConnection = () => {
    console.log(
        logo({
            name: 'EMPLOYEE TRACKER',
            font: 'Speed',
            lineChars: 10,
            padding: 2,
            margin: 3,
            borderColor: 'grey',
            logoColor: 'bold-green',
            textColor: 'green',
        })
            .emptyLine()
            .right('Cat Ormerod')
            .emptyLine()
            .render()
    )
}