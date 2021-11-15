const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TagSchema = new Schema(
    {
        tag: { type: String, enum: ['JS', 'NODE', 'ANGULAR', 'REACT', 'CSS', 'HTML'] },
    },
    { timestamps: true }
);
const Tag = mongoose.model("tag", TagSchema);
module.exports = Tag;