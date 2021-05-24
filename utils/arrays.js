const connection = require('./connection');

const getDeptArr = (cb) => {
    const query = 
        `SELECT * from department`;
    connection.query(query, (err, res) => {
        if (err) throw err;
        const deptArr = res.map(department => {
            return {value: department.id, name: department.name}
        })
        cb(deptArr)
    });
};

const getEmpArr = (cb) => {
    const query = 
        `SELECT * from employee`;
    connection.query(query, (err, res) => {
        if (err) throw err;
        const empArr = res.map(employee => { 
            return {value: employee.id, name: `${employee.first_name} ${employee.last_name}` }
        })
        cb(empArr)
    });
};

const getRoleArr = (cb) => {
    const query = 
        `SELECT * from role`;
    connection.query(query, (err, res) => {
        if (err) throw err;
        const roleArr = res.map(role => { 
            return {value: role.id, name: role.title }
        })
        cb(roleArr)
    });
};

module.exports = {getDeptArr, getEmpArr, getRoleArr}