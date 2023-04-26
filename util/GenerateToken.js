const jwt = require('jsonwebtoken')
const secret = "secret"

const generatetokens = (user)=>{
    return jwt.sign({
        user},secret,{expiresIn:'60'}
    )
}
// generatetokens({
//     name:"Nancy",
//     pass:"abc"
// })
// console.log(generatetokens({
//     name:"Nancy",
//     pass:"abc"
// }));
module.exports={generatetokens}