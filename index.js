const inquirer = require('inquirer');
const fs = require('fs');

//view everything
app.get('/employee_db', (req, res) => {
    let sql = 'SELECT * FROM employee'
    db.query(sql, err => {
        if (err) {
            throw err
        }
        res.send('DESCRIBE employee');
    })
})

//adding an employee
app.post('/employee_db', (req, res) => {
    let sql = 'INSERT INTO employee(first_name, last_name, role_id, manager_id, department, employee_id, department_id)'
    db.query(sql, err => {
        if (err) {
            throw err
        }
        res.send('employee created');
    })
})

