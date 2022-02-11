const Manager = require('../models/Manager');

test('Verify the manager officeNumb function', ()=>{
    const manager = new Manager('Joe Jackson', 12, 'joe@email.com', 3);

    expect(manager.officeNumb()).toEqual(manager.officeNumber)
});

test('Verify the employeeRole function', ()=>{
    const manager = new Manager('Joe Jackson', 12, 'joe@email.com', 3);

    expect(manager.employeeRole()).toEqual('Manager')
});
