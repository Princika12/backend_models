const express = require("express");
// const mongoose=require("mongoose");
const app = express();
const { connectDatabase } = require("./connection/connect");
const Tele_Model = require("./models/telegram");
const Lkdn_Model = require("./models/linkdin");
const PINTEREST = require("./models/pinterest");
app.use(express.json());



app.post("/api/Telegram", async (req, res) => {
    try {
        const newObject = {

            message: req.body.msg,
            contact: req.body.contact_no,
            reaction: req.body.react,
            reply: req.body.reply,

        }
        const teleData = new Tele_Model(newObject);
        await teleData.save();
        return res.json({ success: true, message: "Data saved succesfully" })
    } catch (error) {
        console.log(error);
        return res.status(402).json({ success: false, error: error.message });
    }
})
app.get("/api/Telegram", async (req, res) => {
    try {
      const sortedStudents = await  Tele_Model.find().sort({ createdAt: -1 }); //-1 is decendingg and 1 is ascending
      return res.json({ success: true, data:sortedStudents});
    } catch (error) {
      return res.json({ success: false, error: error.message });
    }
  });


app.post("/api/linkdn", async (req, res) => {
    try {
        const newObject = {

            postNo: req.body.no,
            likes: req.body.num,
            photo: req.body.image,
            searchBar: req.body.content,

        }
        const lkdnData = new Lkdn_Model(newObject);
        await lkdnData.save();
        return res.json({ success: true, message: "Data saved succesfully" })
    } catch (error) {
        console.log(error);
        return res.status(402).json({ success: false, error: error.message });
    }
});
app.get("/api/linkdn", async (req, res) => {
    try {
      const sortedStudents = await  Lkdn_Model.find(); 
      return res.json({ success: true ,data:sortedStudents });
    } catch (error) {
      return res.json({ success: false, error: error.message });
    }
  });

  app.post("/api/pinterest", async (req, res) => {
    try {
        const newObject = {

            pinNo: req.body.p_number,
            likes: req.body.p_likes,
            photo: req.body.p_photo,
            react: req.body.p_react,
            boardNo:req.body.board_number

        }
        const pinData = new PINTEREST(newObject);
        await pinData.save();
        return res.json({ success: true, message: "Data saved succesfully" })
    } catch (error) {
        console.log(error);
        return res.status(402).json({ success: false, error: error.message });
    }
})
app.get("/api/pinterest", async (req, res) => {
    try {
      const pint = await  PINTEREST.find().sort({ createdAt: -1 }); //-1 is decendingg and 1 is ascending
      return res.json({ success: true, data:pint});
    } catch (error) {
      return res.json({ success: false, error: error.message });
    }
  });


connectDatabase();
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})





