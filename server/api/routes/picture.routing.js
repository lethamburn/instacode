const express = require("express");
const router = express.Router();
const fileMiddleware = require("../../middlewares/file.middleware");

const {
  getAllPictures,
  getPicture,
  postNewPicture,
  deletePicture,
} = require("../controllers/picture.controller");

router.get("/", getAllPictures);
router.get("/:pictureId", getPictureById);
router.post(
  "/",
  [fileMiddleware.upload.single("picture"), fileMiddleware.uploadToCloudinary],
  postNewPicture
);
router.delete("/:id", deletePicture);
module.exports = router;
