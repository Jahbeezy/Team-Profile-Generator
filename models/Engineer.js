const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    employeeGithub() {
        return this.github;
    }

    employeeRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;