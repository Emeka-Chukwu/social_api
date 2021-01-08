const {body} = require("express-validator");
const Users = require("../models/Users");


module.exports = [
    body("email")
    .trim()
    .isEmail()
    .withMessage("Email format address not valid"),
    body("password", "password must be atleast 6 characters longs")
    .trim()
    .isLength({min: 6}),
]


