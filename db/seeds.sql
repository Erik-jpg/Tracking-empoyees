INSERT INTO employee (first_name, last_name, role_id, manager_id, department, employee_id, department_id) 
VALUES ('Mike', 'Diado', 05, "Engineering", 005, 15),
        ('Alice', 'Green', 04, "Administration", 004, 14),
        ('Victor', 'John', 01, 0114, "Managment", 001, 11);

INSERT INTO role (role_id, title, salary, employee_id, department_id)
    values (05, "Engineer", 120000, 005, 15),
            (04, "Administrator", 160000, 004, 14),
            (01, "Manager", 250000, 001, 11);

INSERT INTO department (department_id, name, employee_id)
values  (15, "Engineering", 005),
        (14, "Administration", 004),
        (11, "Managment", 001);