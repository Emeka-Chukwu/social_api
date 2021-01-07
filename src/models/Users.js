const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{type: String, required: true},
    password:{type: String, required: true},
    username: {type:String, required: true},
    posts: [{type: Schema.Types.ObjectId, ref:"Post"}],
    groups: [{type: Schema.Types.ObjectId, ref: "Group"}]
}, {timestamps: true});

module.exports = mongoose.model("User", userSchema, "Users");