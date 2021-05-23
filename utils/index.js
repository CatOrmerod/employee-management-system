const functions = require('./functions')
const arrays = require('./arrays');
const { queryHandler } = require('./query');
const prompts = require('./prompts');

const promptHandler = () => {
    console.log("prompt handler called", prompts.promptUser)
    prompts.promptUser()
        .then((answer) => {
            switch (answer.action) {
                case 'View all Employees':
                    viewEmployees();
                    break;
                case 'View all Employees by Department':
                    viewEmployeeDept();
                    break;
                case 'View all Employees by Manager':
                    viewEmployeeMan();
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
                    viewDepartments();
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
}

const confirmPrompt = () => {
    prompts.confirmPrompts()
        .then((answer) => {
            console.log(answer.confirm);
            if (answer.confirm)
                promptHandler();
            else console.log('Programme finished')
        })
}


const viewDepartments = () => {
    console.log('Showing all departments...\n');
    const query =
        `SELECT department.id AS id,
        department.name AS 'Department'
        FROM department`;
    queryHandler(query)
    confirmPrompt();
};

const viewRoles = () => {
    console.log('Showing all roles...\n');
    const query =
        `SELECT role.id AS id, 
        role.title AS 'Job Title', 
        department.name AS 'Department'
        FROM role
        INNER JOIN department ON role.department_id = department.id`;
    queryHandler(query);
    confirmPrompt();
};

const viewEmployees = () => {
    console.log('Showing all employees...\n');
    const query =
        `SELECT employee.id AS ID, 
        CONCAT (employee.first_name, " ", employee.last_name) AS 'Name',
        role.title AS 'Job Title', 
        department.name AS 'Department',
        role.salary AS 'Salary', 
        CONCAT (manager.first_name, " ", manager.last_name) AS 'Manager'
        FROM employee
        LEFT JOIN role ON employee.role_id = role.id
        LEFT JOIN department ON role.department_id = department.id
        LEFT JOIN employee manager ON employee.manager_id = manager.id`;
    queryHandler(query);
    confirmPrompt();
};

const viewDepartmentBudget = () => {
    console.log('Showing budget by Department...\n');
    const query =
        `SELECT department_id AS ID, 
        department.name AS Department,
        SUM(salary) AS Budget
        FROM role
        INNER JOIN department ON role.department_id = department.id
        GROUP BY role.department_id`;
    queryHandler(query);
    confirmPrompt()
};

const addRole = () => {
    arrays.getDeptArr(deptArr => {
        prompts.promptAddRole(deptArr)
            .then((answer) => {
                const departmentID = answer.deptName
                const query = `INSERT INTO role (title, salary, department_id)
            VALUES (?, ?, ?)`;
                const params = [answer.roleName, answer.roleSalary, departmentID]
                queryHandler(query, params);
                console.log('Added Role successfully...\n');
                viewRoles();
            });
        
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
                    console.log('Added Employee successfully...\n');
                    viewEmployees();
                });
            
        });
    })
}

const addDepartment = () => {
    prompts.promptAddDepartment()
        .then((answer) => {
            const query = `INSERT INTO department (name) VALUES (?)`;
            const params = [answer.addDept];
            queryHandler(query, params);
            console.log('Added Department successfully...\n');
            viewDepartments();
        });
        
}

const removeEmployee = () => {
    arrays.getEmpArr(empArr => {
        prompts.promptRemoveEmployee(empArr)
        .then((answer) => {
            const query = `DELETE FROM employee WHERE id = ?`;
            const id = answer.employeeNameRemove
            const params = [id];
            queryHandler(query, params);
            console.log('Removed Employee successfully...\n');
            viewEmployees();
        })
    })
}

const removeRole = () => {
    arrays.getRoleArr(roleArr => {
        prompts.promptRemoveRole(roleArr)
        .then((answer) => {
            const query = `DELETE FROM role WHERE id = ?`;
            const id = answer.roleNameRemove
            const params = [id];
            queryHandler(query, params);
            console.log('Removed Role successfully...\n');
            viewRoles();
        })
    })
}

const removeDepartment = () => {
    arrays.getDeptArr(deptArr => {
        prompts.promptRemoveDepartment(deptArr)
        .then((answer) => {
            const query = `DELETE FROM department WHERE id = ?`;
            const id = answer.departmentNameRemove
            const params = [id];
            queryHandler(query, params);
            console.log('Removed Role successfully...\n');
            viewDepartments();
        })
    })
}

const updateEmployeeRole = () => {
    arrays.getEmpArr(empArr => {
        arrays.getRoleArr(roleArr => {
            prompts.promptUpdateEmployeeRole(empArr, roleArr)
            .then((answer) => {
                const query = `UPDATE employee SET role_id = ? WHERE id = ?`;
                const roleId = answer.roleUpdate
                const empId = answer.empNameUp
                const params = [roleId, empId];
                queryHandler(query, params);
                console.log('Updated Employee Role...\n');
                viewEmployees();
            })
        })
    })
}

const updateEmployeeMan = () => {
    arrays.getEmpArr(empArr => {
        prompts.promptUpdateEmployeeMan(empArr)
            .then((answer) => {
                const query = `UPDATE employee SET manager_id = ? WHERE id = ?`;
                const manId = answer.manUpdate
                const empId = answer.empNameUp
                const params = [manId, empId];
                queryHandler(query, params);
                console.log('Updated Employee Manager...\n');
                viewEmployees();
            })
    })
}
const viewEmployeeMan = () => {
    arrays.getEmpArr(empArr => {
        prompts.promptEmpMan(empArr)
            .then((answer) => {
                console.log('Showing all Employees by Manager...\n');
                const query = `SELECT employee.id AS ID, 
                CONCAT (employee.first_name, " ", employee.last_name) AS 'Name',
                role.title AS 'Job Title', 
                department.name AS 'Department',
                role.salary AS 'Salary', 
                CONCAT (manager.first_name, " ", manager.last_name) AS 'Manager'
                FROM employee
                LEFT JOIN role ON employee.role_id = role.id
                LEFT JOIN department ON role.department_id = department.id
                LEFT JOIN employee manager ON employee.manager_id = manager.id
                WHERE employee.manager_id = ?`;
                const manId = answer.managerEmp
                const params = [manId];
                queryHandler(query, params);
                confirmPrompt()
            })
    })
}
const viewEmployeeDept = () => {
    arrays.getDeptArr(deptArr => {
        prompts.promptEmpDept(deptArr)
            .then((answer) => {
                console.log('Showing Employees by Department...\n');
                const query = `SELECT employee.id AS 'ID', 
                CONCAT (employee.first_name, " ", employee.last_name) AS 'Name',
                title AS 'Job Title', 
                salary AS 'Salary', 
                name AS 'Department' 
                FROM employee 
                LEFT JOIN role ON employee.role_id = role.id 
                LEFT JOIN department ON role.department_id = department.id 
                WHERE department_id = ?`;
                const deptId = answer.departmentEmp
                const params = [deptId];
                queryHandler(query, params);
                confirmPrompt()
            })
    })
}
//module.exports = { viewDepartments, viewRoles, viewEmployees, viewDepartmentBudget, addRole, addEmployee, addDepartment, removeEmployee, removeDepartment, removeRole }

module.exports = { promptHandler, confirmPrompt }