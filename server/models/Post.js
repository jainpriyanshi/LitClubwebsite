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
    likes:{
        type: String,
        default: 0
    },
    posttext: {
        type: String,
        required : true 
    },
    postImage: {
        type:String,
        default : ""
    },
    likers : [{
        type:string
    }]

});

module.exports = Post = mongoose.model("posts",PostSchema);
