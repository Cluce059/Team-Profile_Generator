const { TestWatcher } = require('jest');
const { hasUncaughtExceptionCaptureCallback } = require('process');
const Intern = require('../lib/Intern');

test('creates intern object', ()=>{
    const intern = new Intern('Joe', 'Joe@email.com', 7, 'UCF');
    expect(typeof(intern)).toBe('object');
});

test('gets intern school from getSchool', () =>{
    const school = 'UCF';
    const intern = new Intern('Joe', 'Joe@email.com', 7, school);
    expect(intern.getSchool()).toBe(school);
});

test('gets intern rols from getRole', () =>{
    const intern = new Intern('Joe', 'Joe@email.com', 7, 'UCF');
    expect(intern.getRole()).toBe("Intern");
});

test('gets intern name from getName', () =>{
    const name = 'Joe';
    const intern = new Intern(name, 2, '2@3.com', 'UCF');
    expect(intern.getName()).toBe(name);
});

test('gets intern id from getId', ()=>{
    const id = 33;
    const intern = new Intern('Joe', id, 'Joe@shmoe.com', 'UCF');
    expect(intern.getId()).toBe(id);
});

test('gets intern email from getEmail', () =>{
    const email = 'Joe@shmoe.com';
    const intern = new Intern('Joe', 5, email, 'UCF');
    expect(intern.getEmail()).toBe(email);
});