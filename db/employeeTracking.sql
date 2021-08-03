DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_DB;

USE employee_DB;

CREATE TABLE employee (
    id INT NOT NULL,
    PRIMARY KEY (id),
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL, 
    manager_id INT, 
    FOREIGN KEY (manager_id)
);

    CREATE TABLE role (
        id INT NOT NULL, PRIMARY KEY (id),
        title VARCHAR(30) NOT NULL,
        salary INT DECIMAL,
        department_id INT NOT NULL
    );

    CREATE TABLE department (
        id INT NOT NULL, PRIMARY KEY (id),
        name VARCHAR(30) NOT NULL
    );