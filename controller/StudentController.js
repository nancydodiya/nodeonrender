const StudentsSchema=require("../model/StudentsSchema");
const mailer= require("../util/Mailer");
const generatetokens = require("../util/GenerateToken")
exports.createStudent = (req,res)=>{
    const Student = new StudentsSchema(req.body);


Student.save((err,data)=>{

    if(err){
        res.status(500).json({
            message:"Error in saving data"
        })
    }
    else{
        var otp=Math.floor((Math.random()*100000)+1).toString()
       // mailer.sendMail(data.email,otp)
       mailer.attach(data.email, data.firstName)
        res.status(201).json({
            data:data,
            message:"Data saved successfully"
        })
    }
  })

}

exports.getallStudents = (req,res)=>{
    StudentsSchema.find((err,data)=>{
        if(err){
            res.status(500).json({
                message:"Error is fetching data"
            })
        }
        else{
            res.status(201).json({

                data:data,
                message:"Data fetched sucessfully"
            })
        }
    })
}
exports.deleteStudent =(req,res)=>{
    const id = req.params.id;

    StudentsSchema.findByIdAndDelete(id, (err, data)=>{
        if(err){
            res.status(500).json({
                message:"Error in deleting data",
            });
        }else{
            if(data !=null|| data!=undefined){
                res.status(200).json({
                    data:data,
                    message:"Data deleted successfully",
                });
            }else{
                res.status(404).json({
                    message:"Data not found",
                });
            }
        }
    })
};

exports.updateStudent = (req, res) =>{
    console.log(req.body.firstName)
    if(
        req.body.firstName == undefined ||
        req.body.lastName == undefined ||
        req.body.email == undefined ||
        req.body.password == undefined ||
        req.body.age == undefined
    ){
        console.log("Bad request");
        res.status(400).json({
            message:"Bad request",
        });
    }else{
        var student ={
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            email : req.body.email,
            password : req.body.password,
            age :req.body.age
        };
        
        const id = req.params.id;
        StudentsSchema.findByIdAndUpdate(id, req.body, (err, data)=>{
            if(err){
                res.status(500).json({
                    message: "Error in updating data",
                });
            }else{
                if (data!=null || data!= undefined){
                    res.status(200).json({
                        data: data,
                        message:"Data updated successfully",
                    });
                }
                else{
                    res.status(404).json({
                        message:"Data not found",
                    });
                }
            }
        });
    }
};

exports.getstudentsById = (req,res)=>{
    const id = req.params.id
    StudentsSchema.findById(id,(err,data)=>{
        if(err){
            res.status(500).json({
                message:"Error in fetching data",
            })
        }
        else{
            if(data!=null || data!=undefined){
                res.status(200).json({
                    message:"Data fetched successfully",
                    data:data,
                })
            }
            else{
                res.status(404).json({
                    message:"Data not found",
                })
            }
        }
    })
}
exports.forgetPass =(req, res)=>{
    var email = req.body.email
    StudentsSchema.findOne({email},(err,data)=>{
        if(err){
            res.status(500).json({
                message:"unknown error occured"
            })
        }else{
            var otp=Math.floor((Math.random()*100000)+1).toString();
            mailer.sendMail(data.email,otp);

            StudentsSchema.updateOne({email},{otp:otp},(err,data)=>{
                if(err){
                    res.status(500).json({
                        message:"Error in updating"
                    })
                }else{
                    res.status(200).json({
                        message:"otp send "
                    })
                }
            })
        }

    })
}
exports.login = (req,res)=>{
    email=req.body.email
    StudentsSchema.find({email}, (err,data)=>{
        console.log(data);
        if(err){
            res.status(401).json({
                err:"error"
    
            })
        }else{
            var token = generatetokens.generatetokens(data)
            res.status(200).json({
                msg:"login successfully",
                token:token
            })
        }
    })
}