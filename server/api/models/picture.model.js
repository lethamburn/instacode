const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PictureSchema = new Schema(
  {
    description: { type: String, require: true },
    picture: { type: String, require: true },
    tags: [{ type: String, enum: ['JS', 'NODE', 'ANGULAR', 'REACT', 'CSS', 'HTML'] }],
  },
  { timestamps: true }
);
const Picture = mongoose.model("picture", PictureSchema);
module.exports = Picture;
