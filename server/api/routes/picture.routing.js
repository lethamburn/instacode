const express = require("express");
const router = express.Router();
const fileMiddleware = require("../../middlewares/file.middleware");
const { isAuth } = require("../../middlewares/auth.middleware");

const {
  getAllPictures,
  postNewPicture,
  deletePicture,
} = require("../controllers/picture.controller");

router.get("/", [isAuth], getAllPictures);
router.post(
  "/",
  [isAuth],
  [fileMiddleware.upload.single("picture"), fileMiddleware.uploadToCloudinary],
  postNewPicture
);
router.delete("/:id", [isAuth], deletePicture);
module.exports = router;
