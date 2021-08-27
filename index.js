const inquirer = require("inquirer");
const fs = require("fs");
const mysql = require("mysql2");
const util = require("util");

const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: "345trehgf503(_)@m3H0lyFuck3r",
    database: "employee_db",
  },
  console.log("connected to db!")
);
db.connect();
db.query = util.promisify(db.query);
openApp();

// //view everything
// app.get('/employee_db', (req, res) => {
//     let sql = 'SELECT * FROM employee'
//     db.query(sql, err => {
//         if (err) {
//             throw err
//         }
//         res.send('DESCRIBE employee');
//     })
// }),

//adding an employee

async function openApp() {
  let decision = await inquirer.prompt([
    {
      type: "list",
      name: "decisions",
      message: "What would you like to do?",
      choices: [
        "view all departments",
        "view all roles",
        "view all employees",
        "add a department",
        "add a role",
        "add an employee",
        "update an employee",
      ],
    },
  ]);
  switch (decision.decisions) {
    case "view all departments":
      selectDepartment();
      break;
    case "view all roles":
      selectRole();
      break;
    case "view all employees":
      selectEmployee();
      break;
    case "add a department":
      newDepartment();
      break;
    case "add a role":
      newRole();
      break;
    case "add an employee":
      newEmployee();
      break;
    case "update an employee":
      updateAnEmployee();
      break;
  }
}

async function selectDepartment() {
  const department = await db.query("SELECT * FROM department");
  console.table(department);
  openApp();
}
async function newDepartment() {
  let answer = await inquirer.prompt([
    {
      type: "input",
      name: "department_name",
      message: "What is the name of the new department?",
    },
  ]);
  await db.query("INSERT INTO department SET name = ?", answer.department_name);
  const newDepartment = await db.query("SELECT * FROM department");
  console.table(newDepartment);
  openApp();
}
async function selectEmployee() {
  const employee = await db.query("SELECT * FROM employee");
  console.table(employee);
  openApp();
}
async function newEmployee() {
  let answer = await inquirer.prompt([
    {
      type: "input",
      name: "first_name",
      message: "What is the first name of the employee?",
    },
    {
      type: "input",
      name: "last_name",
      message: "What is the last name of the employee?",
    },
    {
      type: "input",
      name: "role_id",
      message: "What is the role id number of this employee? Engineering is 1, Administration is 2, and Management is 3.",
    },
    {
      type: "input",
      name: "manager_id",
      message: "what is the manager's id number that they report to?",
    },
  ]);
  await db.query(
    "INSERT INTO employee SET first_name=?, last_name=?, role_id=?, manager_id=?",
    [answer.first_name, answer.last_name, answer.role_id, answer.manager_id]
  ); console.table('employee has been added.');
  openApp();
}

async function selectRole() {
  const role = await db.query("SELECT * FROM role");
  console.table(role);
  openApp();
}

async function newRole() {
  let answer = await inquirer.prompt([
    {
      type: "input",
      name: "role_title",
      message: "What is the title of this new role?",
    },
    {
      type: "input",
      name: "role_salary",
      message: "What is the salary for this new Role?",
    },
    {
      type: "input",
      name: "department_id",
      message: "What is the I.D. for this new role?",
    },
  ]);
  await db.query(
    "INSERT INTO role SET role_title=?, role_salary=?, department_id=?",
    [answer.role_title, answer.role_salary, answer.department_id]
  );console.table('New Role added');
  openApp();
}

async function updateAnEmployee() {
  let answer = await inquirer.prompt([
    //find employee by employee id
    {
      type: "list",
      name: "employee_id",
      message:
        "please choose the following employee from the list.",
       choices: async()=>{
          const employees = await db.query('SELECT * FROM employee')
          const newEmployees = employees.map((employee)=>{
            return {
                 name: employee.first_name + " " + employee.last_name,
                 value: employee.id
            }
          })
          return newEmployees;

       }
    },
    {
      type: "list",
      name: "role_id",
      message: 
      "Please choose the new role for that employee",
      choices: async()=>{
        const roles = await db.query('SELECT * FROM role')
        const newRoles = roles.map((role)=>{
          return {
            name: role.title,
            value: role.id
          }
        })

        return newRoles;
      }
    }
]);
console.log(answer.role_id, answer.employee_id)
  await db.query(
    "UPDATE employee SET role_id=? WHERE  id=?",
    [answer.role_id, answer.employee_id], (err, results) => {
      if (err) throw err;
      openApp();
    }
  );console.log('Employee updated');

  openApp();
  }


//presented with all the options: view all departments, roles, employees, add a department, add an employee, update an employee
//view departments (department id),roles (job title, role id, their department, and department id), employees (employee id, first and last name, job title, department, salaries, and manager)
//prompted to add a department and does such
//when selected add role, prompted to enter name, salary, and department for the role and then stored in the database
//add employee, then prompted to enter first name, last name, role, and manager, which is then add to db
//update an  employee, prompted to then select employee from stored database, then update their new role and then it is stored in database
