const mongoose = require("mongoose");
const Schema =mongoose.Schema;

const PostSchema = new Schema({
    author: {
        type: String,
        required: true
    },
    ldap: {
        type: String,
        required: true
    },
    likes:{
        type: String,
        default: 0
    },
    posttext: {
        type:String,
        required : true 
    },
    postCaption: {
        type: String,
        default : ""
    },
    postBadge: {
        type: String,
        default : ""
    },
    Date : {
        type: Date,
        requires: true
    },
    likers : [{
        type:String
    }]

});

module.exports = Post = mongoose.model("posts",PostSchema);
