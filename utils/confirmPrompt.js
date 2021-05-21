const inquirer = require("inquirer")
const functions = require('./functions')
//const { promptUser } = require('./prompts')


const confirmPrompt = () => {
    return inquirer.prompt({
        type: 'confirm',
        name: 'confirm',
        message: 'Another Request or Exit?'
    })
    .then((answer) => {
        console.log(answer.confirm);
        if (answer.confirm) 
        promptHandler();
        else console.log('Programme finished')
    }) 
}

const promptHandler = () => {
    console.log("prompt handler called", promptUser)
    return inquirer.prompt({
        type: 'list',
        name: 'action',
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
                    functions.viewEmployees();
                    break;
                case 'View all Employees by Department':
                    viewEmployeesDept();
                    break;
                case 'View all Employees by Manager':
                    viewEmployeesMan();
                    break;
                case 'Add Employee':
                    functions.addEmployee();
                    break;
                case 'Remove Employee':
                    removeEmployee();
                    break;
                case 'Update Employee':
                    updateEmployee();
                    break;
                case 'View all Roles':
                    functions.viewRoles();
                    break;
                case 'Add Role':
                    functions.addRole();
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
                    functions.viewDepartmentBudget();
                    break;
                case 'Exit':
                    endPrompts();
                    break;

            }
            //promptHandler()
        });
};

module.exports = { confirmPrompt }