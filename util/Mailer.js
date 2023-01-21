const mailer = require('nodemailer')
const sendMail = async(to,otp)=>{
const transpoter=mailer.createTransport({
    service:'gmail',
    port:587,
    secure:false,
    auth:{
        user:"nancydodia.nd@gmail.com",
        pass:"hhrknjazlzivgnan"
    }

})
const options = {
    from:"nancydodia.nd@gmail.com",
    to:to,
    subject:'otp',
    html:'<button>'+otp+'<button>',
}
transpoter.sendMail(options,(err,info)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(info);
    }
})
}
const attach = async (to, name) => {
    const transpoter = mailer.createTransport({
        service: 'gmail',
        port: 587,
        secure: false,
        auth: {
            user: "nancydodia.nd@gmail.com",
            pass: "hhrknjazlzivgnan"
        }
    })
    const options = {
        from: "nancydodia.nd@gmail.com",
        to: to,
        subject: 'otp',
        html: '<h2>Hello '+ name + '</h2><br><br><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQtnk1kE-rNHQ1Z7o_pEvfWfjcB7A3ZY8icA&usqp=CAU"/>',
        attachments:[{
            filename:'img.jpg',
            path:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQtnk1kE-rNHQ1Z7o_pEvfWfjcB7A3ZY8icA&usqp=CAU'
        }] 
    }
    transpoter.sendMail(options, (err, info)=> {
        if(err){
            console.log(err);
        }else{
            console.log(info);
        }
    })
}
module.exports={sendMail, attach};