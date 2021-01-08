const {body} = require("express-validator");


module.exports = [
    body("name", "name field cannot be empty not be greater than 255 characters")
    .trim()
    .isLength({min: 1, max: 255}),

    body("description", "password must be atleast 6 characters longs")
    .trim()
    .isLength({min: 6}),
]


