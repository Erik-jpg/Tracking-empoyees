DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

DROP TABLE IF EXISTS department;
    CREATE TABLE department (
        id INT NOT NULL AUTO_INCREMENT, PRIMARY KEY (id),
        name VARCHAR(30) NOT NULL
    );

DROP TABLE IF EXISTS role;
    CREATE TABLE role (
        id INT NOT NULL AUTO_INCREMENT, PRIMARY KEY (id),
        title VARCHAR(30) NOT NULL,
        salary DECIMAL,
        department_id INT,
        FOREIGN KEY (department_id) REFERENCES department(id)
        ON DELETE SET NULL
    );

DROP TABLE IF EXISTS employee;
CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    manager_id INT,
    role_id INT, 
    FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL,
    FOREIGN KEY (role_id) REFERENCES role(id)
    ON DELETE SET NULL
);



