const { TestWatcher } = require('jest');
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('creates Engineer object', () => {
    const github = 'Davehub'
    const engineer = new Engineer('Dave', 56, 'Dave@email.com',github);
    expect(typeof(engineer)).toBe('object');
});

test('gets engineer github from getGithub', () =>{
    const github ='Davehub';
    const engineer = new Engineer('Dave', 56, 'Dave@email.com', github);
    expect(engineer.getGithub()).toBe(github);
});

test('gets engineer role from getrole', () =>{
    const role = 'Engineer'
    const engineer = new Engineer('Dave', 56, 'Dave@email.com', 'Davehub');
    expect(engineer.getRole()).toBe(role);
});

test('gets engineer name from getName', () =>{
    const name = 'Dave';
    const employee = new Employee(name, 56, 'Dave@email.com', 'Davehub');
    expect(employee.getName()).toBe(name);
});

test('gets engineer id from getId', () =>{
    const engineer = new Engineer('Dave', 56, 'Dave@email.com', 'Davehub');
    expect(engineer.getId()).toBe(56);
});

test('gets engineer email from getEmail', () =>{
    const email = 'Dave@email.com';
    const engineer = new Engineer('Dave', 56, email, 'Davehub');
    expect(engineer.getEmail()).toBe(email);
});
