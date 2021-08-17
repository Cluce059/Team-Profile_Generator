const { TestWatcher } = require('jest');
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