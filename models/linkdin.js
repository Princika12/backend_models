const mongoose = require("mongoose")

const linkdSchema = new mongoose.Schema({
    postNo: Number,
    likes: Number,
    photo: String,
    searchBar: String,

});
const usermodel = mongoose.model("Linkdin", linkdSchema);

module.exports = usermodel;