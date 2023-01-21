const departmentSchema = require('../model/DepartmentSchema');

exports.createDepartment = ((req,res)=>{

    department = new departmentSchema(req.body);
    department.save((err,data)=>{
        if(err){
            res.status(500).send({
                message:err.message || "Some error occured while creating the department"
            })
        }
        else{
            res.status(201).json({
                message:"Department created successfully",
                data:data
            })
        }
    })

})
