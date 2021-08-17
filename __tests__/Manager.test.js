const { execPath, hasUncaughtExceptionCaptureCallback } = require('process');
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('creates manager object', () =>{
    const manager = new Manager('Dave', 56, 'Dave@email.com', 666);
    expect(manager.officeNumber).toBe(666);
});

test('gets manager role from getrole', () =>{
    const manager = new Manager('Dave', 56, 'Dave@email.com', 666);
    expect(manager.getRole()).toBe('Manager');
});

test('gets manager name from getname', () =>{
    const name = 'bobbay';
    const manager = new Manager(name, 56, 'Dave@email.com', 666);
    expect(manager.getName()).toBe(name);
});

test('gets manager email from getemail', () =>{
    const email = 'bobby@email.com';
    const name = 'bobbay';
    const manager = new Manager(name, 56, email, 666);
    expect(manager.getEmail()).toBe(email);
});