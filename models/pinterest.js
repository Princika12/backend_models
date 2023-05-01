const mongoose = require("mongoose")

const pinSchema = new mongoose.Schema({
    pinNo: Number,
    likes: Number,
    photo: String,
    react: String,
    boardNo: Number,

});
const usermodel = mongoose.model("Pinterest", pinSchema);

module.exports = usermodel;