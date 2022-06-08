const router=require('express').Router()
const passport = require('passport');


router.get('/login/faild')

router.get('/',passport.authenticate("google",{scope:["profile"]}))

router.get('/google/callback',passport.authenticate("google",{
    successRedirect:"http://localhost:3000",
    failureRedirect:"/login/faild"
}))

module.exports.router