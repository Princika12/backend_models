const mongoose = require("mongoose")

const pinSchema = new mongoose.Schema({
    likes: Number,
    searchBar: String,
    playlistNo: Number,
    react: String,
    videoNo: Number,

});
const usermodel = mongoose.model("Youtube", ytSchema);

module.exports = usermodel;