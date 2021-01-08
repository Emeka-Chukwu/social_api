const {body} = require("express-validator");


module.exports = [
    body("post", "name field cannot be empty ")
    .trim()
    .isLength({min: 1}),
]


