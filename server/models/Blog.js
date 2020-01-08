const mongoose = require("mongoose");
const Schema =mongoose.Schema;

const BlogSchema = new Schema({
    author: {
        type: String,
        required: true
    },
    ldap: {
        type: String,
        required: true
    },
    likes:{
        type: Number,
        default: 0
    },
    postText: {
        type:String,
        required : true 
    },
    postTitle: {
        type: String,
        default : ""
    },
    postBadge: {
        type: String,
        default : ""
    },
    postSummary: {
        type: String,
        default:""
    },
    Date : {
        type: Date,
        requires: true
    },
    likers : [
       {
           ldap : {
               type: String,
           }
    }]

});

module.exports = Blog = mongoose.model("blogs",BlogSchema);
