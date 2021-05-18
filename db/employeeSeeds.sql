USE employeeDB;

INSERT INTO department (name)
VALUES ('Sales'), ('Marketing'), ('Finance'), ('Customer Service');

INSERT INTO role (title, salary, department_id)
VALUES 
('Sales Manager', 250000, 1), 
('Account Manager', 120000, 1), 
('Account Executive', 80000, 1), 
('Marketing Manager', 270000, 2), 
('Marketing Executive', 120000, 2), 
('Marketing Coordinator', 60000, 2), 
('Finance Manager', 300000, 3),
('Accountant', 125000, 3), 
('Customer Team Lead', 150000, 4), 
('Customer Service Executive', 60000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES 
('Nicole', 'Scott', 4, null), 
('Aoife', 'Shelby', 7, null), 
('Carly', 'Sullivan', 4, 2), 
('Ian', 'Wallington', 1, null), 
('Lexi', 'Whitehead', 2, 4), 
('Jessie', 'McLeay', 8, 2),
('Kate', 'Walter', 9, 1);
