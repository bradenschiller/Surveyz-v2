const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

//authintcation with Google
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const exsistingUser = await User.findOne({ googleId: profile.id });

      if (exsistingUser) {
        //we already have the User's ID
        return done(null, exsistingUser);
      }
      //create new user
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);
