

// 3 templates for cards to be looped through in generateHTMl function
const internCard = function(intern){
    return `
    <div class="employee">
            <div class="titleBox">
              <h3 class="role">Intern</h3>
              <h3 class="name"> ⛏ ${intern.name}</h3>
            </div>
            <div class="info">
                <h4 class="id">ID: ${intern.id} </h4>
                <h4 class="email">Email: <a href="mailto:${intern.email}" target="_blank">${intern.email}</a></h4>
                <h4 class="school">School: ${intern.school} </h4>
            </div>
          </div>
    `
}

const engineerCard = function(engineer){
    return `
    <div class="employee">
            <div class="titleBox">
              <h3 class="role">Engineer</h3>
              <h3 class="name"> 🤖 ${engineer.name}</h3>
            </div>
            <div class="info">
                <h4 class="id">ID: ${engineer.id}</h4>
                <h4 class="email">Email: <a href="mailto:${engineer.email}" target="_blank">${engineer.email}</a></h4>
                <h4 class="github">GitHub: <a href="${engineer.github}" target="_blank"> Jahbeezy </a></h4>
            </div>
          </div>
    `
}


const managerCard = function(manager){
    return `
    <div class="employee">
    <div class="titleBox">
      <h3 class="role"> ☕️ Manager</h3>
      <h3 class="name"> ${manager.name}</h3>
    </div>
    <div class="info">
        <h4 class="id">ID:${manager.id}</h4>
        <h4 class="email">Email: <a href="mailto:${manager.email}" target="_blank" >${manager.email}</a></h4>
        <h4 class="office">Office Number: ${manager.officeNumber}</h4>
    </div>
  </div>
    `
}

//html template to place data within
const htmlPage = function(joiner){
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../style.css">
    <title>TEAM</title>
    </head>
    <body>
    <header class="header">
        <h1>Team Members</h1>
    </header>
    <section class="employeeCont" id="empCont">
    ${joiner}
    </section>
    </body>
    </html>
    `
}

//checks employee role from an array and passes the data through the card functions
generateHTMl = (array) => {
    employeeArray = [];
    for (let i = 0; i < array.length; i++){
        const emp = array[i];
        

        if(emp.officeNumber){
            const mCard = managerCard(emp);
            employeeArray.push(mCard);
        }
        if(emp.github){
            const eCard = engineerCard(emp);
            employeeArray.push(eCard);
        }
        if(emp.school){
            const iCard = internCard(emp);
            employeeArray.push(iCard);
        }
    }
    const joiner = employeeArray.join(' ');
    const printer = htmlPage(joiner);
    
    return printer;

}



module.exports = generateHTMl;