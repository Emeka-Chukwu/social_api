const { interfaces } = require("mocha");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    post: {type: String, required: true},
    likes: {type :Number, default: 0},
    shares: {type :Number, default: 0},
    author: {type : Schema.Types.ObjectId, ref: "User", required: true}

}, {timestamps: true});

module.exports = mongoose.model("Post", PostSchema, "Posts");