const Employee = require('./Employee');

function Engineer(name, id, officeNumber){
    this.name = name;
    this.id = id;
    this.officeNumber = officeNumber;
};


module.exports = Engineer;