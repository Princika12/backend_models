const mongoose = require("mongoose")

const linkdSchema = new mongoose.Schema({
    lineNo: Number,
    Noticebar: String,
    text: String,
    react: String,
    searchBar: String,

});
const usermodel = mongoose.model("Editor", linkdSchema);

module.exports = usermodel;