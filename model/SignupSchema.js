const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SignupSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
    }
})
module.exports = mongoose.model('Signup', SignupSchema);