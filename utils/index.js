// const inquirer = require('inquirer')
// const functions = require('./functions')
// const { promptUser } = require('./prompts')

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

// module.exports = { promptHandler }