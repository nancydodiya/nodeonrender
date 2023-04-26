const multer = require('multer');
const path = require('path');
const uploadSchema = require('../model/UploadSchema');
const readFromExcel = require('../util/ReadDataFromExcel');
const googleController = require('../controller/googleController');
const {where}=require('../model/StudentsSchema');

const storage = multer.diskStorage({
    destination:'./uploads',

    filename: function(req,file,cb){
        cb(null,file.originalname)
    }
})


const upload = multer({
    storage:storage,
    limits:{fileSize:90000000},
   
}).single('file')



exports.uploadFile = (req,res)=>{

    upload(req,res,(err,data)=>{
        if(err){
            res.status(500).json({
                message:'File upload failed',
                error:err.message
            })
        }
        else{
            if(req.file==undefined){
                res.status(400).json({
                    message:'No file selected'
                })
            }
            else{
                if(req.file.size > 5000000){
                    return res.status(402).json({
                        err:"file size is too large"
                    })

                }
                else{
                    var x= googleController.uploadFile(req.file.path)
                    if(x!=undefined||x!=null){
                        return res.status(200).json({
                            msg:"File upload successfully",
                            file:x
                        })
                    }

                }
                // var data = readFromExcel.readData(req.file.path);
                // console.log("data",data);
                // let abspath = path.resolve('./uploads',req.file.originalname);
                // console.log("abspath", abspath);
                // const upload1 = new uploadSchema({
                //     name:req.file.originalname,
                //     path:abspath,
                //     size:req.file.size,
                //     type:req.file.mimetype
                // })
                // upload1.save((err,data)=>{
                // if(err){
                //     res.status(400).json({
                //         message:'Error in saving file',
                //     })
                // }
                // else{
                //     // res.status(200).json({
                //     //     message:'File uploaded successfully',
                //     //     file:`uploads/${req.file.originalname}`
                //     // })
                // }
                // })
            // res.status(200).json({
            //     message:'File uploaded successfully',
            //     file:`uploads/${req.file.originalname}`
            // })
        }
    
    }
})
}