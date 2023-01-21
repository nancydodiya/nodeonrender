const StudentSchema1  = require("../model/StudentSchema1");


exports.createStudent1 = (req,res)=>{
    const Student = new StudentSchema1(req.body);

    Student.save((err,data)=>{

        if(err){
            res.status(500).json({
                message:"Error in saving data"
            })
        }
        else{
            res.status(201).json({
                data:data,
                message:"Data saved successfully"
            })
        }
    })    
}