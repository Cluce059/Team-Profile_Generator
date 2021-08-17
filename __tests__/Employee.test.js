const { TestWatcher } = require('jest');
const { type } = require('os');
const { hasUncaughtExceptionCaptureCallback } = require('process');
const Employee = require('../lib/Employee.js');

test('Can create Employee object with a name', () =>{
    const employee = new Employee('Dave');
    expect(typeof(employee)).toBe('object');
    expect(employee.name).toBe('Dave');
});

test('Can set employee id and email', () =>{
    const id = 56;
    const name = 'Dave';
    const email = 'Dave@email.com';
    const employee = new Employee(name, id, email);
    expect(employee.id).toBe(id);
    expect(employee.email).toBe(email);
    expect(employee.name).toBe('Dave');
});

test('gets name using getName', () => {
    const name = 'Dave';
    const employee = new Employee('Dave');
    expect(employee.getName()).toBe(name);
});

test('gets id using getId', () =>{
    const id = 56;
    const employee = new Employee('Dave', id);
    expect(employee.getId()).toBe(id);

});

test('gets email from getEmail', () =>{
    const email = 'Dave@email.com';
    const employee = new Employee('Dave', 56, email);
    expect(employee.getEmail()).toBe(email);
});

test('gets role from getRole', () =>{
    const role = 'Employee';
    const employee = new Employee('Dave', 56, 'Dave@email.com');
    expect(employee.getRole()).toBe(role);
});

