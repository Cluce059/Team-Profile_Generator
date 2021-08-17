const Employee = require('../lib/Employee');

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
            this.school = school;
            this.role = 'Intern';
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return this.role;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
};

module.exports = Intern;