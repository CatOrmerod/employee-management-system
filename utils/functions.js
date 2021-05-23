const arrays = require('./arrays');
const { queryHandler } = require('./query');
const { confirmPrompt } = require('./index')
const prompts = require('./prompts');


const viewDepartments = () => {
    console.log('Showing all departments...\n');
    const query =
        `SELECT department.id AS id,
        department.name AS 'Department'
        FROM department`;
    queryHandler(query);
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
        `SELECT employee.id, 
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
        `SELECT department_id AS id, 
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

module.exports = { viewDepartments, viewRoles, viewEmployees, viewDepartmentBudget, addRole, addEmployee, addDepartment, removeEmployee, removeDepartment, removeRole }

