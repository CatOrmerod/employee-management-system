const inquirer = require('inquirer')
const functions = require('./functions')
const { deptArr, empArr, roleArr } = require('./arrays')

// const promptHandler = () => {
//     console.log("prompt handler called", promptUser)
//     promptUser()
//         .then((answer) => {
//             switch (answer.action) {
//                 case 'View all Employees':
//                     functions.viewEmployees();
//                     break;
//                 case 'View all Employees by Department':
//                     viewEmployeesDept();
//                     break;
//                 case 'View all Employees by Manager':
//                     viewEmployeesMan();
//                     break;
//                 case 'Add Employee':
//                     functions.addEmployee();
//                     break;
//                 case 'Remove Employee':
//                     removeEmployee();
//                     break;
//                 case 'Update Employee':
//                     updateEmployee();
//                     break;
//                 case 'View all Roles':
//                     functions.viewRoles();
//                     break;
//                 case 'Add Role':
//                     functions.addRole();
//                     break;
//                 case 'Remove Role':
//                     removeRole();
//                     break;
//                 case 'View all Departments':
//                     functions.viewDepartments();
//                     break;
//                 case 'Add Department':
//                     addDepartment();
//                     break;
//                 case 'Remove Department':
//                     removeDepartment();
//                     break;
//                 case 'View Department budget':
//                     functions.viewDepartmentBudget();
//                     break;
//                 case 'Exit':
//                     endPrompts();
//                     break;

//             }
//             //promptHandler()
//         });
// };

const promptUser = () => {
    console.log("prompt user called")
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
        },
        {
            type: 'number',
            name: 'roleSalary',
            message: ({ roleName }) => `What is the salary for a ${(roleName)}?`,
        },
        {
            type: 'list',
            name: 'deptName',
            message: ({ roleName }) => `Which Department does a ${(roleName)} sit in?`,
            choices: deptArr,
        }])
}

const promptAddEmployee = (roleArr, empArr) => {
    console.log(empArr)
    return inquirer.prompt([
        {
            type: 'input',
            name: 'empFirstName',
            message: 'What is the employee first name?',
        },
        {
            type: 'input',
            name: 'empLastName',
            message: ({ empFirstName }) => `What is ${(empFirstName)}'s Surname?`,
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
const promptUpdateEmployee = (empArr, roleArr) => {
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
            message: ({ empNameUp }) => `Would you like to update the role or manager of ${(empNameUp)}?`,
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

module.exports = { promptUser, promptAddDepartment, promptAddRole, promptAddEmployee, promptRemoveDepartment, promptRemoveRole, promptRemoveEmployee, promptUpdateEmployee, promptAddEmployee }