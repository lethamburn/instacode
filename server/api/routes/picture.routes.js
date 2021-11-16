const express = require("express");
const router = express.Router();
const upload = require("../../middlewares/file.middleware");
const { isAuth } = require("../../middlewares/auth.middleware");

const {
  getAllPictures,
  getPictureById,
  postNewPicture,
  deletePicture,
} = require("../controllers/picture.controller");

router.get("/", getAllPictures);
router.get("/:pictureId", getPictureById);
router.post(
  "/",
  [isAuth],
  [upload.single("picture")],
  postNewPicture
);
router.delete("/:id", [isAuth], deletePicture);
module.exports = router;
