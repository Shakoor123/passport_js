const passport = require('passport');

GOOGLE_CLIENT_ID='895657809795-7f3k8535fplfsbopfpeoujckd44m410l.apps.googleusercontent.com'

GOOGLE_CLIENT_SECRET='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'


var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null,profile)
  }
));

passport.serializeUser((user,done)=>{
    done(null,user)
})

passport.deserializeUser((user,done)=>{
    done(null,user)
})