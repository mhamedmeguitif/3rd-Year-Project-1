var express = require("express");
const bodyParser = require("body-parser");
var User = require("../models/User");
var authenticate = require("../authenticate");
var passport = require("passport");
var router = express.Router();
const cors = require("./cors");
var formidable = require("formidable");
var fs = require("fs");
router.use(bodyParser.json());

/* GET users listing. */

router.get("/",cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
  User.find({})
    .then(
      (user) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(user);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});

router.delete("/", authenticate.verifyUser, (req, res, next) => {
  User.remove({})
    .then(
      (resp) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(resp);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});

router.post("/signup", (req, res, next) => {
  var user = new User({
    username: req.body.username,
    password: req.body.password,
    prenom: req.body.firstname,
    nom_de_famille: req.body.lastname,
    Pays: req.body.Pays,
    Email: req.body.Email,
    Domaine: req.body.Domaine,
    specialite: req.body.specialite,
    Etablissement: req.body.Etablissement,
    compagnie: req.body.compagnie,
    photo: req.body.photo,
  });
  User.register(user, req.body.password, (err, user) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json");
      res.json({ err: err });
    } else {
      passport.authenticate("local")(req, res, () => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json({ success: true, status: "Registration Successful!"});
      });
    }
  });
});

router.post("/login",  (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);

    if (!user) {
      res.statusCode = 401;
      res.setHeader("Content-Type", "application/json");
      res.json({ success: false, status: "Login Unsuccessful!", err: info });
    }
    req.logIn(user, (err) => {
      if (err) {
        res.statusCode = 401;
        res.setHeader("Content-Type", "application/json");
        res.json({
          success: false,
          status: "Login Unsuccessful!",
          err: "Could not log in user!",
        });
      }

      var token = authenticate.getToken({ _id: req.user._id });
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json({
        success: true,
        status: "Login Successful!",
        token: token,
        body: user,
      });
      console.log('user detailes ==>' );
      console.log(user);
      
    });
  })(req, res, next);
});
  router .get('/userInfo',authenticate.verifyUser, (req, res, next) => {
    User.findById(req.user._id).then((user)=>{
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(user);
    }).catch(err=>next(err)); 
     
  });

router.get("/logout", cors.corsWithOptions, (req, res) => {
  if (req.session) {
    req.session.destroy();
    res.clearCookie("session-id");
    res.redirect("/");
    res.end();
  } else {
    var err = new Error("You are not logged in!");
    err.status = 403;
    next(err);
  }
});
router.post("/uploadAvatar", authenticate.verifyUser, (req, res) => {
  var userId = req.params._id;
  User.findById({ _id: userId })
    .then(
      (user) => {
        let form = new formidable.IncomingForm();
        form.keepExtensions = true;
        form.parse(req, (err, fields, files) => {
          if (err) {
            return res.status(400).json({
              error: "Photos could not be uploaded",
            });
          }
          if (files.photo) {
            user.photo.data = fs.readFileSync(files.photo.path);
            user.photo.contentType = files.photo.type;
          }
          user.save((err, result) => {
            if (err) {
              return res.status(400).json({
                error: errorHandler.getErrorMessage(err),
              });
            }
          });
        });
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});

router.get("/checkJWTToken", cors.corsWithOptions, (req, res) => {
  passport.authenticate("jwt", { session: false }, (err, user, info) => {
    if (err) return next(err);

    if (!user) {
      res.statusCode = 401;
      res.setHeader("Content-Type", "application/json");
      return res.json({
        status: "JWT Invalid!",
        success: false,
        err: info,
      });
    } else {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      return res.json({
        status: "JWT Valid!",
        success: true,
        user: user,
      });
    }
  })(req, res);
});

module.exports = router;
