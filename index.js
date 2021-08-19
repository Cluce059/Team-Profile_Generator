const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const fs = require('fs');
const inquirer = require('inquirer');
const { inherits } = require('util');
const Prompt = require('inquirer/lib/prompts/base');

const employees =[];

function init(){
    startHTML();
    addEmployee();
};

function addEmployee() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the new team member's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's ID number?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email address?"
        },
        {
            type: 'list',
            message: 'What type of employee are you adding?',
            name: 'role',
            choices: ['Intern', 'Manager', 'Engineer']
        }
    ])
    .then(function({name, id, email, role}){
        let roleAttr = '';
        if(role === 'Intern'){
            roleAttr = 'school';
            //console.log(roleAttr.value);
        } else if(role === 'Manager'){
            roleAttr = 'office number';
        } else if(role === 'Engineer'){
            roleAttr = 'github username';
        }
        //console.log(roleAttr);
        inquirer.prompt([{
            tye: 'input',
            name: 'roleAttr',
            message: `Enter new ${role}'s ${roleAttr}`
        },
        {
            type: 'list',
            name: 'addTeammate',
            message: 'Would you like to add another team member?',
            choices: ['Yes', 'No']
        }    
    ])
    .then(function({roleAttr, addTeammate}){
        let newEmployee;
        if(role === 'Engineer'){
            newEmployee = new Engineer(name, id, email, roleAttr);
        } else if(role === 'Intern'){
            newEmployee = new Intern(name, id, email, roleAttr);
        } else if(role === 'Manager'){
            newEmployee = new Manager(name, id, email, roleAttr);
        }
        employees.push(newEmployee);
        //console.log(newEmployee);
        renderHTML(newEmployee)
        .then(function(){
            if(addTeammate === "Yes"){
                console.log(newEmployee);
                addEmployee();
            } else if(addTeammate === 'No'){
                //console.log('bye!');
                endHTML();
            }
        });
      });
    });
};

function renderHTML(employee){
    return new Promise(function(resolve, reject){
        const name = employee.getName();
        const id = employee.getId();
        const email = employee.getEmail();
        const role = employee.getRole();
        let data = '';
        if(role === 'Engineer'){
            const github = employee.getGithub();
            data = `<div class="col-6">
            <div class="shadow card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header bg-primary text-white">${name}<br /><br />         
            <i style="font-size:24px;color:white" class="fa">&#xf0f4;</i> 
            Engineer</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email: 
                <a href = "mailto: ${email}">${email}</a>
                </li>
                <li class="list-group-item">
                GitHub: 
                <a href="https://github.com/${github}">${github}</a>
                </li>
            </ul>
            </div>
        </div>`
        } else if(role === 'Intern'){
            const schoolName = employee.getSchool();
            data = `<div class="col-6">
            <div class="shadow card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header bg-primary text-white">${name}<br /><br />
            <i style="font-size:24px;color:white" class="fa">&#xf118;</i>
            Intern</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email: 
                <a href = "mailto: ${email}">${email}</a>
                </li>
                <li class="list-group-item">School: ${schoolName}</li>
            </ul>
            </div>
        </div>`;
        } else if(role === 'Manager'){
            const officeNumber = employee.getOfficeNumber();
            data = `<div class= "col-6">
            <div class="shadow card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header bg-primary text-white">${name}<br /><br />
            <i style="font-size:24px;color:white" class="fa">&#xf2b9;</i>
            Manager</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email:
                <a href = "mailto: ${email}">${email}</a>
                </li>
                <li class="list-group-item">Office Phone: ${officeNumber}</li>
            </ul>
            </div>
        </div>`
        }
        console.log('Adding employee(s) your team profile ...');
        fs.appendFile('dist/teamProfile.html', data, (err) =>{
            if(err){
                return reject(err);
            }
            return resolve();
        });
    });
};

function endHTML(){
    const html = ` </div>
    </div>
    
    </body>
    </html>`;
    fs.appendFile("dist/teamProfile.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("done rendering profile page");
};

function startHTML() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <title>Team Profile</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-danger mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">My Team</span>
        </nav>
        <div class="container">
            <div class="row">`;
    fs.writeFile("dist/teamProfile.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("start");
};

init();
