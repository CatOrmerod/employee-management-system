const inquirer = require('inquirer')
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

const promptAddRole = () => {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'roleName',
        message: 'What is the name of the new Role?', 
    },
    {
        type: 'number',
        name: 'roleSalary',
        message:({ roleName }) => `What is the salary for a ${(roleName)}?`,
    },
    {
        type: 'list',
        name: 'deptName',
        message:({ roleName }) => `Which Department does a ${(roleName)} sit in?`,
        choices: deptArr,
    }])
}

const promptAddEmployee = () => {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'empFirstName',
        message: 'What is the employee first name?', 
    },
    {
        type: 'input',
        name: 'empLastName',
        message:({ empFirstName }) => `What is ${(empFirstName)}'s Surname?`,
    },
    {
        type: 'list',
        name: 'empRole',
        message:({ empFirstName }) => `What role will ${(empFirstName)} be starting in?`,
        choices: roleArr,
    },
    {
        type: 'list',
        name: 'empMan',
        message:({ empFirstName }) => `Who is ${(empFirstName)}'s Manager?`,
        choices: empArr,
    }])
}

const promptRemoveRole = () => {
    return inquirer.prompt({
        type: 'list',
        name: 'roleNameRemove',
        message: 'Which role which you like to delete?',
        choices: roleArr, 
    })
}
const promptRemoveDepartment = () => {
    return inquirer.prompt({
        type: 'list',
        name: 'departmentNameRemove',
        message: 'Which Department which you like to delete?',
        choices: deptArr, 
    })
}
const promptRemoveEmployee = () => {
    return inquirer.prompt({
        type: 'list',
        name: 'employeeNameRemove',
        message: 'Which Employee which you like to delete?',
        choices: empArr, 
    })
}
const promptUpdateEmployee = () => {
    return inquirer.prompt([
        {
        type: 'list',
        name: 'empNameUp',
        message: 'Which Employee would you like to update?', 
        choices: empArr,
    },
    {
        type: 'list',
        name: 'roleOrMan',
        message:({ empNameUp }) => `Would you like to update the role or manager of ${(empNameUp)}?`,
        choices: ['Manager', 'Role']
    },
    {
        type: 'list',
        name: 'manUpdate',
        message: ({ empNameUp }) => `Please select a new Manager for ${(empNameUp)}:`,
        choices: empArr,
        when: ({ roleOrMan }) => {
            if (roleOrMan === 'Manager') {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'roleUpdate',
        message: ({ empNameUp }) => `Please select a new Manager for ${(empNameUp)}:`,
        choices: roleArr,
        when: ({ roleOrMan }) => {
            if (roleOrMan === 'Role') {
                return true;
            } else {
                return false;
            }
        }
    },
])
}
const promptAddRole = () => {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'roleName',
        message: 'What is the name of the new Role?', 
    },
    {
        type: 'number',
        name: 'roleSalary',
        message:({ roleName }) => `What is the salary for a ${(roleName)}?`,
    },
    {
        type: 'list',
        name: 'deptName',
        message:({ roleName }) => `Which Department does a ${(roleName)} sit in?`,
        choices: deptArr,
    }])
}
module.exports = { promptUser, promptAddDepartment, promptAddRole, promptAddEmployee, promptRemoveDepartment, promptRemoveRole, promptRemoveEmployee, promptUpdateEmployee, promptAddEmployee }