const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uploadSchema = new Schema({
    name:{
        type: String,
    },
    path:{
        type: String,
    },
    size:{
        type: Number,
    },
    type:{
        type: String,
    }
},{
    timestamps: true
})
module.exports = mongoose.model("Upload", uploadSchema);