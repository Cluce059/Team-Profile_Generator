const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const fs = require('fs');
const inquirer = require('inquirer');
const { inherits } = require('util');

const employees =[];

function employeePrompt() {
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
            name: 'addEmployee',
            message: 'Would you like to add another team member?',
            choices: ['Yes', 'No']
        }    
    ])
    .then(function({roleAttr, addEmployee}){
        let newEmployee;
        if(role === 'Engineer'){
            newEmployee = new Engineer(name, id, email, roleAttr);
        } else if(role === 'Intern'){
            newEmployee = new Intern(name, id, email, roleAttr);
        } else if(role === 'Manager'){
            newEmployee = new Manager(name, id, email, roleAttr);
        }
        employees.push(newEmployee);
        console.log(newEmployee);
    })
    });
};


function init(){
    employeePrompt();
};

init();
