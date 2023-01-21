const http = require("http");
var server = http.createServer();
const PORT = 3000
const files = require('./task')


files.readJsonFromFile()
files.writeJson()

server.listen(PORT,()=>{
  
})