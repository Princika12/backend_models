/* const express= require("express");
const res = require("express/lib/response");
const app= express();
app.listen(8080, ()=>{
    console.log("server is running at port 8080");
});

//19/02/2023//

app.get("/street",(req, res)=>{
let arr = [
    //street
    "mohaddipur",
    "kunraghat",
    "ranidiha",
    "golghar"

];
if (arr.length >= 5){
    return res.json({data: arr, success: true})}
    else{
        return res.json({error:"data is less than 5", success : false});
    }}
    ); */

    // app.get("/places", (req, res)=>{

    // })



//10/03/2023
//DATABASE

//     const express = require("express");
// const req = require("express/lib/request");
//     const app = express();


    //MongoDB
    //1.it is a database which is used to store data
    //2.it stores data in the form of document which is basically objects
    //3.stores specific kinds of data in specific buckets known as collection
    //4.each collection holds document with same keys.
    //5.MongoDB stores data in BSON format (Binary JSON)
    //




    //27/03/2023

    // const { append } = require("express/lib/response");

// app.post("/savedata",(req,res)=>{
//  try {
//      console.log(req.body);
//      return res.json({ success: true, message: "Data saved successfully"
//     }) catch (error) 
// {
//     console.log(error);
//     return
// }      
//  }
// }
// )
//as we know that in mongoDB collection, we store similar documents i.e. Document
//(object) have same key value pair
//so before storing any document in collection, we need to describe those fields
// which are been used in that collection. 
// This process is called Modelling. 
// For one collection, a one Model is made in the server, inside Models folder
//Model folder contains all the models(For diff collections) which are to be used
//in DB.


//28/03/2023
//
//
//
//
//


const userscrema = new mongoose.Schema({
    name: String,
    rollNo: Number,
    branch: String,
    age: Number,
    isFresher: Boolean,
 });
 
 const usermodel = mongoose.model("user", userScrema);
 
 module.exports = usermodel;



 console.log(req.name);




 const newobject = {
    name: "", 
    rollNo: 0,
    branch: "",
    age: 0,
    isFresher: false,
  };

  {
    "username":"Tanya Singh",
    "userRollno":9989690,
    "userBranch":"CSE",
    "userAge":20,
    "fresher":true
}


app.post("/api/savedata",(req, res)=>{
try {
const newobject={
    name:req.body.username,
    rollno: req.body.userBranch,
    age: req.body.userAge,
    ifresher: req.body.fresher,
};
console.log(newobject);
const saveData = new  USER_MODEL(newobject)

returnres.json({ success: true, message: "Data saved successfully"});
} catch (error) {
    console.log(error)
}
})