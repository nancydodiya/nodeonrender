const SignupSchema = require('../model/SignupSchema');
const bcrypt = require('bcrypt');
const saltRounds = 10;

function hashPassword(password) {

        bcrypt.hash(password, saltRounds, function(err, hash) {
            // Store hash in your password DB.
           
            return hash;
        });

}
var hashedPassword;
exports.signup = (req, res) => {
    
    const {name,password} = req.body;
    console.log(name,password);
    hashedPassword=bcrypt.hashSync(password, saltRounds);
    
    const signup = new SignupSchema({
        name:name,
        password:hashedPassword
    })

    signup.save((err,doc)=>{
        if(err){
            
            res.status(500).json({
                message:"Error in saving data",
            })
        }
        else{
            res.status(200).json({
                message:"Data saved successfully",
                data:doc
            })
        }
    })
}
exports.validate = (req, res) => {
    const {name,password} = req.body;


  
    bcrypt.compare(password,"$2b$10$nu5HWgTxhLZ/.8SeTGRpLutFRwMLtUQ0.1tVdE5UoRxOwp1IjPdUS").then(res=>{
        console.log(res);
    }).catch(err=>{
        console.log(err);
    })

    res.status(200).json({
        message:"Data saved successfully",
    })
    
}