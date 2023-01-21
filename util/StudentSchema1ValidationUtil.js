const zod = require('zod');

const StudentSchema1 = zod.object({

    body:zod.object({
        name:zod.string().min(1).max(20),
        email:zod.string().max(20),
        phone:zod.string().min(10).max(10),
        age:zod.number()
    }).strict()
    
})
module.exports = StudentSchema1