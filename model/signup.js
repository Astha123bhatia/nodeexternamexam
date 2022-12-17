const mongoose=require("mongoose");
const {stringify}=require("querystring");

let mySchema=mongoose.Schema;

let mySignupSchema=new mySchema({
    firstName:{type:String,required:[true,"First name needed..."]},
    email:{type:String,required:[true,"email needed..."]},
    password:{type:String,required:[true,"password needed..."]},
    phoneNumber:{type:String,required:[true,"Phone number needed..."],max:10},
    age:{type:Number,required:[true,"Age needed..."]},
    gender:{type:String,required:[true,"gender needed..."]},
    address:{type:String,required:[true,"address needed..."]},

});

const tableName="Signup";
let signupData=mongoose.model(tableName,mySignupSchema);
module.exports=signupData;