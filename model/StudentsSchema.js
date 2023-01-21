const mongoose = require("mongoose")
const schema = mongoose.Schema;
const studentsSchema = schema({

    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email:{
        type: String
    },
    password:{
        type: String
    },
    age:{
        type: Number
    },
    otp:{
        type: String
    }

})

module.exports = mongoose.model("Students", studentsSchema);
