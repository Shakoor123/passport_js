const cookieSession = require('cookie-session');
const express=require('express');
const passport = require('passport');
const cors=require("cors")
const passportSetUp=require('./passport')
const app=express()


app.use(cookieSession(
    {
        name:'session',
        keys:"ssh",
        maxAge:24*60*60*100
    }
))
app.use(passport.initialize())
app.use(passport.session())
app.use(cors({
    origin:'http://localhost:3000',
    methods:"GET,POST,PUT,DELETE",
    Credential:true,

}))
app.listen(5000,()=>{
    console.log("server running");
})