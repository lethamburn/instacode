const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PictureSchema = new Schema(
  {
    description: { type: String, require: true },
    picture: { type: String, require: true },
    tags: [{ type: Schema.Types.ObjectId, ref: "tag" }],
    createdBy: [{ type: Schema.Types.ObjectId, ref: "idUser" }],
  },
  { timestamps: true }
);
const Picture = mongoose.model("picture", PictureSchema);
module.exports = Picture;
