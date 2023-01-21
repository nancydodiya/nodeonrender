const reader = require('xlsx');

const readData =(filepath) => {

    const file = reader.readFile(filepath);
    let data = [];
    const sheet = file.SheetNames
    for(let i=0; i<sheet.length; i++){
        const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]])
        temp.forEach((res)=>{
            data.push(res)
        })
    }
   //console.log(data);
   return data;
}
//readData('../QB.xlsx')
module.exports = {readData};