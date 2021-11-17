const { isAuth } = require("../../middlewares/auth.middleware");
const express = require("express");
const router = express.Router();

const { getAllUsers, createUser, authenticate, logout } = require("../controllers/user.controller");
router.get("/", [isAuth], getAllUsers);
router.post("/register", createUser);
router.post("/login", authenticate);
router.post("/logout", [isAuth], logout);
module.exports = router;