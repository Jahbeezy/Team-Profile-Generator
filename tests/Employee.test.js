const Employee = require('../models/Employee');

test('Verify an employee object', ()=>{
    const employee = new Employee('Joe Jackson', 12, 'joe@gmail.com');

    expect(employee.name).toEqual(expect.any(String))
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.email).toEqual(expect.any(String))

});

test('Verify the employeeName function', ()=>{
    const employee = new Employee('Joe Jackson', 12, 'joe@gmail.com');

    expect(employee.employeeName()).toEqual(employee.name)
});



test('Verify the employeeId function', ()=>{
    const employee = new Employee('Joe Jackson', 12, 'joe@gmail.com');

    expect(employee.employeeId()).toEqual(employee.id)
});

test('Verify the employeeEmail function', ()=>{
    const employee = new Employee('Joe Jackson', 12, 'joe@gmail.com');

    
    expect(employee.employeeEmail()).toEqual(employee.email)
});

test('Verify the employeeRole function', ()=>{
    const employee = new Employee('Joe Jackson', 12, 'joe@gmail.com');

    expect(employee.employeeRole()).toEqual('Employee')
});