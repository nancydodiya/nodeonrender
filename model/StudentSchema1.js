const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const student1Schema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    age: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Student", student1Schema); 