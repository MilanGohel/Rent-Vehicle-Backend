const express = require("express");
const router = express.Router();
const userController = require("../Controllers/userController");
router.post("/login", userController.login);
router.post("/register", userController.register);
router.post("/verifyuser", userController.verifyUser);
module.exports = router;
