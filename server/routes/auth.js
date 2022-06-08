const router=require('express').Router()
const passport = require('passport');


router.get('/login/faild',(req,res)=>{
    res.status(401).json({
        success:false,
        message:"faliuer"
    })
})


router.get('/login/success',(req,res)=>{
    if(req.user){
        res.status(200).json({
            success:true,
            message:"successful",
            user:req.user,
            // cookies:req.cookies
        })
    }
    
})

router.get('/logout',(req,res)=>{
    req.logOut()
    res.redirect("http://localhost:3000")
})

router.get('/',passport.authenticate("google",{scope:["profile"]}))

router.get('/google/callback',passport.authenticate("google",{
    successRedirect:"http://localhost:3000",
    failureRedirect:"/login/faild"
}))

module.exports=router