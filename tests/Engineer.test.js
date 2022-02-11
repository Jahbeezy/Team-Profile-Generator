const Engineer = require('../models/Engineer');

test('Verify the engineer github', ()=>{
    const engineer = new Engineer('Joe Jackson', 12, 'joe@email.com','JoeCrazy');

    expect(engineer.github).toEqual(expect.any(String))
});

test('Verify the engineer employeeGithub function', ()=>{
    const engineer = new Engineer('Joe Jackson', 12,'joe@email.com', 'JoeCrazy');

    expect(engineer.employeeGithub()).toEqual(engineer.github);
});

test('Verify the engineer employeeRole function', ()=>{
    const engineer = new Engineer('Joe Jackson', 12,'joe@email.com', 'JoeCrazy');

    expect(engineer.employeeRole()).toEqual('Engineer')
});