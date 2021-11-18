const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PictureSchema = new Schema(
  {
    picture: { type: String, require: true },
  },
  { timestamps: true }
);
const Picture = mongoose.model("picture", PictureSchema);
module.exports = Picture;
