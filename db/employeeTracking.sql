DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_DB;

USE employee_DB;

CREATE TABLE employee (
    id INT NOT NULL,
    PRIMARY KEY (employee_id),
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL, 
    manager_id INT, 
    FOREIGN KEY (manager_id),
    role_id INT NOT NULL, REFERENCES role (role_id),
    department_id INT NOT NULL, REFERENCES department (department_id)
);

    CREATE TABLE role (
        id INT NOT NULL, PRIMARY KEY (role_id),
        title VARCHAR(30) NOT NULL,
        salary INT DECIMAL,
        employee_id INT NOT NULL, REFERENCES employee (eployee_id),
        department_id INT NOT NULL, REFERENCES department (department_id)
    );

    CREATE TABLE department (
        id INT NOT NULL, PRIMARY KEY (department_id),
        name VARCHAR(30) NOT NULL, 
        employee_id INT NOT NULL, REFERENCES employee (eployee_id),
        department_id INT NOT NULL, REFERENCES department (department_id)
    );