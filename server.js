const mysql = require('mysql');
const inquirer = require('inquirer');
const consoletable = require('console.table')
const logo = require('asciiart-logo')

require('dotenv').config()

const connection = mysql.createConnection({
    host: process.env.host,
    port: process.env.port,
    user: process.env.username,
    password: process.env.password,
    database: process.env.database
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