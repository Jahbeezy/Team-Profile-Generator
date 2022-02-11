const Intern = require('../models/Intern')

test('Verify the intern school', ()=>{
    const intern = new Intern('Joe Jackson', 12,'joe@email.com', 'UCR');

    expect(intern.school).toEqual(expect.any(String))
});

test('Verify the internSchool function', ()=>{
    const intern = new Intern('Joe Jackson', 12, 'joe@email.com', 'UCR');

    expect(intern.internSchool()).toEqual(intern.school)
});

test('Verify the employeeRole function', ()=>{
    const intern = new Intern('Joe Jackson', 12, 'joe@email.com', 'UCR');

    expect(intern.employeeRole()).toEqual('Intern')
});