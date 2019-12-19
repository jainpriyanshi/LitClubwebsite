const mongoose = require("mongoose");
const Schema =mongoose.Schema;

const PostSchema = new Schema({
    author: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    otp: {
        type: String,
        required: true
    },
    isVerified: {
        type : Boolean,
        required: true
    }
});

module.exports = Post = mongoose.model("posts",PostSchema);
