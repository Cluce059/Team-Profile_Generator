const { TestWatcher } = require('jest');
const { type } = require('os');
const { hasUncaughtExceptionCaptureCallback } = require('process');
const Employee = require('../lib/Employee.js');

test('Can create Employee object', () =>{
    const employee = new Employee('Dave');
    expect(typeof(employee)).toBe('object');
    expect(employee.name).toBe('Dave');
});

