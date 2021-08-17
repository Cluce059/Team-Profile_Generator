function Employee(name) {   
    this.name = name;
    if(this.name === 'Dave'){
        this.value = Math.floor(Math.random() * 10 + 30)
    }else{
        this.value = Math.floor(Math.random() * 10 + 30)
    } 
};

module.exports = Employee;