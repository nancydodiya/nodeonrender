const fs = require('fs');
var emails =[]
var names = []
function readJsonFromFile(){
    var employeestr = fs.readFileSync('./MOCK_DATA.json', 'utf-8')
   
    var employee = JSON.parse(employeestr)
    console.log(employee[0].email);

    names = employee.filter((emp)=>{

      return emp.first_name.startsWith('A')
    })
    console.log("*******",names)


    for(let i =0; i<employee.length; i++)
    {
      console.log(employee[i].email)
      var email=employee[i].email;
      emails.push(email)
      
    }
    console.log(emails);

}


function writeJson(){
  fs.writeFileSync("./email.txt",JSON.stringify(emails))
  }

module.exports ={
    readJsonFromFile,
    writeJson
};

