const express = require("express");
const router = express.Router();
const authController = require('../controllers,/auths_controller')
const validateSignup = require("../validations,/user_validation");
const validateLogin = require("../validations,/user_login");

router.post('/register', validateSignup, authController.registerUser);
router.post("/login", validateLogin, authController.loginUser);

module.exports = router;