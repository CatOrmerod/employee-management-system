const inquirer = require('inquirer')
const { validateString , validateNumber } = require('./validate');
const { deptArr, empArr, roleArr } = require('./arrays')

const promptUser = () => {
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
}

const promptAddDepartment = () => {
    return inquirer.prompt({
        type: 'input',
        name: 'addDept',
        message: 'What is the name of the new Department?',
    })
}

const promptAddRole = (deptArr) => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'roleName',
            message: 'What is the name of the new Role?',
            validate: validateString
        },
        {
            type: 'number',
            name: 'roleSalary',
            message: ({ roleName }) => `What is the salary for a ${(roleName)}?`,
            validate: validateNumber
        },
        {
            type: 'list',
            name: 'deptName',
            message: ({ roleName }) => `Which Department does a ${(roleName)} sit in?`,
            choices: deptArr,
        }])
}

const promptAddEmployee = (roleArr, empArr) => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'empFirstName',
            message: 'What is the employee first name?',
            validate: validateString
        },
        {
            type: 'input',
            name: 'empLastName',
            message: ({ empFirstName }) => `What is ${(empFirstName)}'s Surname?`,
            validate: validateString
        },
        {
            type: 'list',
            name: 'empRole',
            message: ({ empFirstName }) => `What role will ${(empFirstName)} be starting in?`,
            choices: roleArr,
        },
        {
            type: 'list',
            name: 'empMan',
            message: ({ empFirstName }) => `Who is ${(empFirstName)}'s Manager?`,
            choices: empArr,
        }
    ])
}

const promptRemoveRole = (roleArr) => {
    return inquirer.prompt({
        type: 'list',
        name: 'roleNameRemove',
        message: 'Which role which you like to delete?',
        choices: roleArr,
    })
}
const promptRemoveDepartment = (deptArr) => {
    return inquirer.prompt({
        type: 'list',
        name: 'departmentNameRemove',
        message: 'Which Department which you like to delete?',
        choices: deptArr,
    })
}
const promptRemoveEmployee = (empArr) => {
    return inquirer.prompt({
        type: 'list',
        name: 'employeeNameRemove',
        message: 'Which Employee which you like to delete?',
        choices: empArr,
    })
}
const promptUpdateEmployeeRole = (empArr, roleArr) => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'empNameUp',
            message: 'Which Employee would you like to update?',
            choices: empArr,
        },
        {
            type: 'list',
            name: 'roleUpdate',
            message: ({ empNameUp }) => `Please select a new Job Title for ${(empNameUp)}:`,
            choices: roleArr,
        },
    ])
}

const promptUpdateEmployeeMan = (empArr) => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'empNameUp',
            message: 'Which Employee would you like to update?',
            choices: empArr,
        },
        {
            type: 'list',
            name: 'manUpdate',
            message: ({ empNameUp }) => `Please select a new Manager for ${(empNameUp)}:`,
            choices: empArr,
        },
    ])
}

const promptEmpDept = (deptArr) => {
    return inquirer.prompt({
        type: 'list',
        name: 'departmentEmp',
        message: 'Select the Department for which employees you would like to view"',
        choices: deptArr,
    })
}
const promptEmpMan = (empArr) => {
    return inquirer.prompt({
        type: 'list',
        name: 'managerEmp',
        message: 'Select the Manager whose employees you would like to view"',
        choices: empArr,
    })
}

const confirmPrompts = () => {
    return inquirer.prompt({
        type: 'confirm',
        name: 'confirm',
        message: 'Another Request or Exit?'
    })
}



module.exports = { promptUser, promptAddDepartment, promptAddRole, promptAddEmployee, promptRemoveDepartment, promptRemoveRole, promptRemoveEmployee, promptUpdateEmployeeRole, promptUpdateEmployeeMan, promptAddEmployee, promptEmpMan, promptEmpDept, confirmPrompts }