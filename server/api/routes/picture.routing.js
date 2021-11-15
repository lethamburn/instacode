const express = require("express");
const router = express.Router();

const { getAllPictures } = require("../controllers/picture.controller");
router.get("/", getAllPictures);
module.exports = router;