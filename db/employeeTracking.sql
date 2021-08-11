DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_DB;

USE employee_DB;

DROP TABLE IF EXITS employee;
CREATE TABLE employee (
    id INT NOT NULL,
    PRIMARY KEY (id),
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    manager_id INT 
        FOREIGN KEY (manager_id),
    PRIMARY KEY (department_id, role_id),
);

DROP TABLE IF EXITS role;
    CREATE TABLE role (
        id INT NOT NULL, PRIMARY KEY (id),
        title VARCHAR(30) NOT NULL,
        salary DECIMAL,
        PRIMARY KEY (employee_id,department_id)
    );

DROP TABLE IF EXITS department;
    CREATE TABLE department (
        id INT NOT NULL, PRIMARY KEY (id),
        name VARCHAR(30) NOT NULL
    );