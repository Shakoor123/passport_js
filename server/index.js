const express=require('express');
const passport = require('passport');
const cors=require("cors")
const passportSetUp=require('./passport')
const app=express()
const authRout=require('./routes/auth')
app.use('/auth',authRout)
var session = require('express-session');
app.use(session({ secret: 'SECRET' }));
app.use(passport.initialize());
app.use(cors({
    origin:'http://localhost:3000',
    methods:"GET,POST,PUT,DELETE",
    Credential:true,

}))
app.listen(5000,()=>{
    console.log("server running");
})