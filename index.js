//import inquirer and fs
const inquirer = require('inquirer')
const fs = require("fs")
//import my classes
const Manager = require('./models/Manager')
const Engineer = require('./models/Engineer')
const Intern = require('./models/Intern')
const generateHTMl = require('./helper/generateCards')
//empty array to build into
let teamArray = [];
//test array
let employees = [
    {
        id: 1,
        role: "Manager",
        name: "Joe Smith",
        email: "JS@gmail.com",
        officeNumber: 1
    },
    {
        id: 2,
        role: "Manager",
        name: "Tim Cage",
        email: "TC@aol.com",
        officeNumber: 2
    },
    {
        id: 3,
        role: "Engineer",
        name: "John Wiley",
        email: "JW@gmail.com",
        github: "Jahbeezy"
    },
    {
        id: 4,
        role: "Engineer",
        name: "Kim Possible",
        email: "KP@gmail.com",
        github: "Jahbeezy"
    },
    {
        id: 5,
        role: "Intern",
        name: "Ronald James",
        email: "RJ@yahoo.com",
        school: "UCR"
    },
    {
        id: 6,
        role: "Intern",
        name: "West Montgomery",
        email: "WM@hotmail.com",
        school: "CSUSB"
    },
    
]
//intial function to create manager
function createManager() {
    
    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "Please give the name of the manager."
        },
        {
            name: "id",
            type: "input",
            message: "Please provide an ID number"
        },
        {
            name: "email",
            type: "input",
            message: "What is the managers email?"
        },
        {
            name: "officeNumber",
            type: "input",
            message: "What is the managers office number?",
            
        },
        
    ]).then((data) =>{
        let manager = new Manager (data.name, data.id, data.email, data.officeNumber)
        //save as manager and push to teamArray
        teamArray.push(manager)
        createTeam(teamArray)
    })
    }

// create members and build html
function createTeam() {
    
    inquirer.prompt([
        {
            name: "role",
            type: "list",
            message: "would you like to add an employee or build them html?",
            choices: ['Engineer', 'Intern', 'Build']
        },
        {
            name: "name",
            type: "input",
            message: "What is this employee's name?",
            when: (input)=> input.role !== 'Build',
        },
        {
            name: "id",
            type: "input",
            message: "Please provide an ID number",
            when: (input)=> input.role !== 'Build',
        },
        {
            name: "email",
            type: "input",
            message: "What is the employee's email?",
            when: (input)=> input.role !== 'Build',
        },
        {
            name: "github",
            type: "input",
            message: "What is the engineers github?",
            when: (input)=> input.role === 'Engineer',
        },
        {
            name: "school",
            type: "input",
            message: "What is the interns school?",
            when: (input)=> input.role === 'Intern',
        },
        {
            name: "save",
            type: "confirm",
            message: "would you like to save this employee?",
            when: (input)=> input.role !== 'Build',

        },

    ]).then((data) => {
        //empty variable to be filled with inquirer data
        let employee;

        if(data.role === 'Engineer'){
            employee = new Engineer (data.name, data.id, data.email, data.github)
            
        }
        if(data.role === 'Intern'){
            employee = new Intern (data.name, data.id, data.email, data.school)
            
        }
        if(data.role === 'Build'){
            console.log(teamArray)
            const gen = generateHTMl(teamArray)
            creator(gen)
        }
        
        
        
        
        // console.log(newArray)
        
        if(data.save) {
            //if saved push employee data to teamArray 
            teamArray.push(employee);
            console.log(teamArray)
            //return to begining of function with the teamArray
            return createTeam(teamArray)
        }
        createTeam()
        
        
    })
}


// function to build html in dist folder
const creator = (html) => {
    fs.writeFile('./dist/index.html', html, err =>{
        if(err){
            console.log(err);
            return;
        } else {
            console.log('All Done!')
        }
    })
}

createManager()