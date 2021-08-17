const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const fs = require('fs');
const inquirer = require('inquirer');

const team =[];

function employeePrompt() {
    return inquirer.prompt([
        {
            type: 'list',
            message: 'What type of employee are you adding?',
            type: 'type',
            choices: ['Intern', 'Manager', 'Engineer', 'create profile']
        },
    ]).then(role => {
        if(role.type === 'Intern'){
            internPrompt();
        } else if(role.type === 'Manager'){
            managerPrompt();
        } else if(role.type === 'Engineer'){
            engineerPrompt();
        } else if(role.name === 'create profile'){
            renderProfile(output, render(team));
        }
    });
};