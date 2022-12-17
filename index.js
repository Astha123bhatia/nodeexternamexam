const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");

const router=require ("./routes/signup");

const app=express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/api",router);

mongoose.connect("mongodb://127.0.0.1:27017/User");
mongoose.connection.on("connected",()=>{
    console.log("CONNECTED TO DATA BASE");

});
mongoose.connection.on("error",(err)=>{
    console.log("ops!error occured",err);
});

const port=process.env.port||8001;
app.listen(port,()=>console.log('listening on port ${port}...'));

module.exports=app;