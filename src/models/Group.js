const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
    name: {type: String, require: true},
    description: {type: String, required: true},
    creator: {type: Schema.Types.ObjectId, ref:"User", required: true},
    members: [{type: Schema.Types.ObjectId, ref: "User"}]
}, {timestamps: true});

module.exports = mongoose.model("Group", GroupSchema, "Groups")