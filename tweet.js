const mongoose = require("mongoose")

const tweetSchema = new mongoose.Schema({
    tweet: String,
    tweetPhoto: String,
    likes: Number,
    comments: Number,
    tweetedBy: String,

});
const usermodel = mongoose.model("user", userSchema);

module.exports = usermodel;

//H.W.
//Prepare at least 5 Models