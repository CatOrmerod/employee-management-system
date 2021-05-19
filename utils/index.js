const inquirer = require('inquirer')
const functions = require('./functions')

const promptUser = () => {
    return inquirer.prompt({
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
        ],
    })
        .then((answer) => {
            switch (answer.action) {
                case 'View all Employees':
                    viewEmployees();
                    break;
                case 'View all Employees by Department':
                    viewEmployeesDept();
                    break;
                case 'View all Employees by Manager':
                    viewEmployeesMan();
                    break;
                case 'Add Employee':
                    addEmployee();
                    break;
                case 'Remove Employee':
                    removeEmployee();
                    break;
                case 'Update Employee Role':
                    updateEmployeeRole();
                    break;
                case 'Update Employee Manager':
                    updateEmployeeMan();
                    break;
                case 'View all Roles':
                    viewRoles();
                    break;
                case 'Add Role':
                    addRole();
                    break;
                case 'Remove Role':
                    removeRole();
                    break;
                case 'View all Departments':
                    functions.viewDepartments();
                    break;
                case 'Add Department':
                    addDepartment();
                    break;
                case 'Remove Department':
                    removeDepartment();
                    break;
                case 'View Department budget':
                    viewDepartmentBudget();
                    break;
                case 'Exit':
                    endPrompts();
                    break;

            }
        });
};
module.exports = { promptUser }