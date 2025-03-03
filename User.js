const mongoose = require('mongoose')

const userSchemes = new mongoose.Schema(
    {

    name:{type:String},
    email:{type:String},
    password:{type:String},
    otp:{
        otp:{type:String},
        sendTime:{type:Number},
        token:{type:String},
    },
    },
    {timestamps:true}
);
module.exports = mongoose.model("User",userSchemes);