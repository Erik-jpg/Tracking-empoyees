INSERT INTO department (name)
values  ("Engineering"),
        ("Administration"),
        ("Managment");

INSERT INTO role (title, salary, department_id)
    values ("Engineer", 120000, 1),
            ("Administrator", 160000, 2),
            ("Manager", 250000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES ('Victor', 'John', 3, null),
        ('Mike', 'Diado', 1, 1),
        ('Alice', 'Green', 2, 1);