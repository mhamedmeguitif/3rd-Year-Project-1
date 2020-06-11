var passport = require('passport');
var LocalStrategy =  require('passport-local').Strategy;
var JwtStrategy = require('passport-jwt').Strategy;
// requires the model with Passport-Local Mongoose plugged in
var User = require('./models/User');
var config = require('./config');

// used to create, sign, and verify tokens
var jwt = require('jsonwebtoken');

var ExtractJwt = require('passport-jwt').ExtractJwt;

// use static authenticate method of model in LocalStrategy
exports.LocalStrategy = passport.use(User.createStrategy());
// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

exports.getToken = function(user) {
    return jwt.sign(user, config.secretKey,
        {expiresIn: 3600000}); // 3600000 ms  == 1h  
};
 // ===
 // ==== configuration  ===
 //                     ===

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.secretKey; 
   
exports.jwtPassport = passport.use( new JwtStrategy(opts,
    (jwt_payload, done) => {
        console.log("JWT payload: ", jwt_payload);
        User.findOne({_id: jwt_payload._id}, (err, user) => {
            if (err) {
                return done(err, false);
            }
            else if (user) {
                return done(null, user);
            }
            else {
                return done(null, false);
            }
        });
    }));

exports.verifyUser = passport.authenticate('jwt', {session: false});