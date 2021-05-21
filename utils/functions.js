const inquirer = require('inquirer');
const arrays = require('./arrays');
const connection = require('./connection');
const prompts = require('./prompts');
const { queryHandler } = require('./query');
//const { promptHandler } = require('./index');

const viewDepartments = () => {
    console.log('Showing all departments...\n');
    const query = 
        `SELECT department.id AS id,
        department.name AS Department 
        FROM department`;
    queryHandler(query)
};

const viewRoles = () => {
    console.log('Showing all roles...\n');
    const query = 
        `SELECT role.id AS id, 
        role.title AS 'Job Title', 
        department.name AS Department 
        FROM role
        INNER JOIN department ON role.department_id = department.id`;
    queryHandler(query);
};

const viewEmployees = () => {
    console.log('Showing all employees...\n');
    const query = 
        `SELECT employee.id AS id, 
        CONCAT (employee.first_name, " ", employee.last_name) AS 'Employee Name',
        role.title AS 'Job Title', 
        role.salary AS Salary,
        department.name AS Department,
        FROM employee, role, department
        WHERE department.id =role.department_id
        AND role.id = employee.role_id
        ORDER BY employee.id ASC`;
    queryHandler(query);
};

const viewDepartmentBudget = () => {
    console.log('Showing budget by Department...\n');
    const query = 
        `SELECT department_id AS id, 
        department.name AS Department,
        SUM(salary) AS Budget
        FROM role
        INNER JOIN department ON role.department_id = department.id
        GROUP BY role.department_id`;
    queryHandler(query);
};

const addRole = () => {
    arrays.getDeptArr(deptArr => {
        prompts.promptAddRole(deptArr)
        .then((answer) => {
            const departmentID = answer.deptName
            const query = `INSERT INTO roles (title, salary, department_id)
            VALUES (?, ?, ?)`;
            const params = [answer.roleName, answer.roleSalary, departmentID]
            queryHandler(query, params);  
        });
        console.log('Added Role successfully...\n');
    });
    
}

const addEmployee = () => {
    arrays.getRoleArr(roleArr => {
        arrays.getEmpArr(empArr => {
            console.log('executing callback')
            prompts.promptAddEmployee(roleArr, empArr)
            .then((answer) => {
                console.log(answer)
                const query = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
                VALUES (?, ?, ?, ?)`;
                const roleID = answer.empRole
                const managerID = answer.empMan
                const params = [answer.empFirstName, answer.empLastName, roleID, managerID,];
                queryHandler(query, params);
            });
            console.log('Added Employee successfully...\n'); 
        }) ;
        })
        
    
}

module.exports = {viewDepartments, viewRoles, viewEmployees, viewDepartmentBudget, addRole, addEmployee} 

