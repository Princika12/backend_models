const mongoose = require("mongoose");

//outline, blueprint, model, How should your document looks inside
//your collection

const userscrema = new mongoose.Schema({
   name: String,
   rollNo: Number,
   branch: String,
   age: Number,
   isFresher: Boolean,
});

const usermodel = mongoose.model("user", userScrema);

module.exports = usermodel;

