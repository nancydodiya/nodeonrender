const express = require('express');
const app = express();
const mongoose = require('mongoose');
const studentRouter = require("./routes/StudentRoutes");
const departmentRoutes = require("./routes/DepartmentRoutes");
const employeeRoutes = require("./routes/EmployeesRoutes");
const productRoutes = require("./routes/ProductRoutes");
const cartRoutes = require("./routes/CartRoutes");
const uploadRoutes = require("./routes/UploadRoutes");
const studentRoutes = require("./routes/StudentRoutes1");
const studentRoute = require("./routes/StudentRoutes");
const signupRoutes = require("./routes/SignupRoutes");
app.use(express.json())
app.use(express.urlencoded({extended: true}))
require('dotenv').config()
const port = process.env.PORT||3000;

//app.use('/student',studentRouter)
app.use('/department', departmentRoutes)
app.use('/employee', employeeRoutes)
app.use('/product',productRoutes)
app.use('/cart', cartRoutes)
app.use('/upload', uploadRoutes)
app.use('/student',studentRoute)

app.use('/students1',studentRoutes)
app.use('/signup', signupRoutes)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

mongoose.connect("mongodb+srv://root:root@cluster0.y9vfbpf.mongodb.net/learning?retryWrites=true&w=majority",(err)=>{
    if(err){
        console.log("Database Not Connected..", err);
    }else{
        console.log("Database Connected..");
    }
})
    











