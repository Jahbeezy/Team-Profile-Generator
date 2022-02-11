const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school
    }

    internSchool(){
        return this.school;
    }
    employeeRole(){
        return 'Intern'
    }
};

module.exports = Intern