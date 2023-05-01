const mongoose = require("mongoose")

const teleSchema = new mongoose.Schema({
   
    message: String,
    contact: Number,
    reaction: String,
    reply: String,

});
const usermodel = mongoose.model("telegram", teleSchema);

module.exports = usermodel;


