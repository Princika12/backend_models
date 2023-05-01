// const express=require("express");
// // const mongoose=require("mongoose");
// const app=express();
// const {connectDatabase}=require("./connection/connect");
// const Tele_Model=require("./models/telegram");
// const Lkdn_Model=require("./models/linkdin");
// const usermodel=require("./models/linkdin");
// app.use(express.json());

// // const connectDatabase = async () => {
// //     try {
// //       await mongoose.connect("mongodb://127.0.0.1:27017").then(() => {
// //         console.log("database connected");
// //       });
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };


// app.post("/api/Telegram",async(req,res)=>{
//     try {
//         const newObject={
           
//             message: req.body.msg,
//             contact: req.body.contact_no,
//             reaction: req.body.react,
//             reply: req.body.reply,
        
//         }
// const teleData=new Tele_Model(newObject);
// await teleData.save();
// return res.json({success:true,message:"Data saved succesfully"})
//     } catch (error) {
//         console.log(error);
//         return res.status(402).json({success:false,error:error.message});
//     }
// })



// app.post("/api/linkdn",async(req,res)=>{
//     try {
//         const newObject={
           
//           postNo: req.body.no,
//           likes: req.body.num,
//           photo: req.body.image,
//           searchBar: req.body.content,
           
//         }
// const lkdnData=new Lkdn_Model(newObject);
// await lkdnData.save();
// return res.json({success:true,message:"Data saved succesfully"})
//     } catch (error) {
//         console.log(error);
//         return res.status(402).json({success:false,error:error.message});
//     }
// })



//   connectDatabase();
//   const PORT=4000;
//   app.listen(PORT,()=>{
// console.log(`Server is running at port ${PORT}`);
//   })





//   // 20 April 23

//   app.post("/api/savedata", async (req, res)) 