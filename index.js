const inquirer = require('inquirer');
const fs = require('fs');
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: '345trehgf503(_)@m3H0lyFuck3r',
      database: 'classlist_db'
    },
    console.log('connected to db!')
);

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

const selection = {
    async selectDepartment() { const department = await db.query('SELECT * FROM department')
    console.table(department)
},
    async newDepartment(){
        let answer = await inquirer.prompt([{
            type: 'input',
            name: 'addDepartment',
            message: 'Would you like to add a department?'
        }])
        await db.query('INSERT INTO department SET name = ?', res.addDepartment)
        const newDepartment = await db.query('SELECT * FROM department')
        console.table(newDepartment)
    },
    async selectEmployee() { const employee = await db.query('SELECT * FROM employee')
    console.table(employee)
},
    async newEmployee() {
        let answer = await inquirer.prompt([{
            type: 'input',
            name: 'addEmployeeFirst_name',
            message: 'What is the first name of the employee?'
        },
        {
            type: 'input',
            name: 'addEmployeeLast_name',
            message: 'What is the last name of the employee?'
        },
        {
            type: 'input',
            name: 'addRole_id',
            message: 'What is the role number/id of this employee?'
        },
        {
            type: 'confirm',
            name: 'addManager_id',
            message: 'Does this employee have a manager that they report to?'
        }
        }])
        await db.query('INSERT INTO employee SET first_name=?, last_name=?, role_id=?, manager_id, department=?, employee_id=?, department_id=?')
    }
}



//presented with all the options: view all departments, roles, employees, add a department, add an employee, update an employee
//view departments (department id),roles (job title, role id, their department, and department id), employees (employee id, first and last name, job title, department, salaries, and manager)
//prompted to add a department and does such
//when selected add role, prompted to enter name, salary, and department for the role and then stored in the database
//add employee, then prompted to enter first name, last name, role, and manager, which is then add to db
//update an  employee, prompted to then select employee from stored database, then update their new role and then it is stored in database