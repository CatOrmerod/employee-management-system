const inquirer = require('inquirer')

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'initial list',
            message: 'What would you like to do?',
            choices: [
                'View all Employees',
                'View all Employees by Department',
                'View all Employees by Manager',
                'Add Employee',
                'Remove Employee',
                'Update Employee Role',
                'Update Employee Manager',
                'View all Roles',
                'Add Role',
                'Remove Role',
                'View all Departments',
                'Add Department',
                'Remove Department',
                'View Department budget',
                'Exit',
            ]
        }
    ])
        .then(function (answers) {
            const choices = answers;
            if (choices === 'View all Employees') {
                viewEmployees();
            }
            if (choices === 'View all Employees by Department') {
                viewEmployeesDept();
            }
            if (choices === 'View all Employees by Manager') {
                viewEmployeesMan();
            }
            if (choices === 'Add Employee') {
                addEmployee();
            }
            if (choices === 'Remove Employee') {
                removeEmployee();
            }
            if (choices === 'Update Employee Role') {
                updateEmployeeRole();
            }
            if (choices === 'Update Employee Manager') {
                updateEmployeeMan();
            }
            if (choices === 'View all Roles') {
                viewRoles();
            }
            if (choices === 'Add Role') {
                addRole();
            }
            if (choices === 'Remove Role') {
                removeRole();
            }
            if (choices === 'View all Departments') {
                viewDepartments();
            }
            if (choices === 'Add Department') {
                addDepartment();
            }
            if (choices === 'Remove Department') {
                removeDepartment();
            }
            if (choices === 'View Department budget') {
                viewDepartmentBudget();
            }
            if (choices === 'Exit') {
                endPrompts();
            }
        })
}

    module.exports = { promptUser }