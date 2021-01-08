const {body} = require("express-validator");
const Users = require("../models/Users");


module.exports = [
    body("username")
    .trim()
    .isLength({min:3, max:100}),

    body("email")
    .trim()
    .isEmail()
    .withMessage("Email format address not valid")
    .custom(value =>{
        return Users.findOne({email: value}).then(user => {
            if(user) return Promise.reject("Email is in use, Please choose another email");
            else{
                return Promise.resolve(true);
            }
        });
        
    })
    .normalizeEmail(),
    body("password", "password must be atleast 6 characters longs")
    .trim()
    .isLength({min: 6}),
]
 

