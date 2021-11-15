const { isAuth } = require("../../middlewares/auth.middleware");
const express = require("express");
const router = express.Router();

const { getAllTags } = require("../controllers/tag.controller");
router.get("/", [isAuth], getAllTags);
module.exports = router;