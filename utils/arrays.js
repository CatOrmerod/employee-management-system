const mysql = require('mysql');
const connection = require('./connection');
const deptArr = [];
const empArr = [];
const roleArr = [];

const getDeptArr = () => {
    const query = 
        `SELECT * from departments`;
    connection.query(query, (err, res) => {
        if (err) throw err;
        res.forEach(row => {
            deptArr.push({
                id: row.id,
                name: row.name
            })
        })
    });
};

const getEmpArr = () => {
    const query = 
        `SELECT * from employee`;
    connection.query(query, (err, res) => {
        if (err) throw err;
        res.forEach(row => {
            empArr.push({
                id: row.id,
                name: row.name
            })
        })
    });
};

const getRoleArr = () => {
    const query = 
        `SELECT * from role`;
    connection.query(query, (err, res) => {
        if (err) throw err;
        res.forEach(row => {
            roleArr.push({
                id: row.id,
                name: row.name
            })
        })
    });
};

module.exports = {deptArr, roleArr, empArr}