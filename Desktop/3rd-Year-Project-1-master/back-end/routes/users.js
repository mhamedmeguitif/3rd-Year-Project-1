var express = require("express");
const bodyParser = require("body-parser");
var User = require("../models/User");
var authenticate = require("../authenticate");
var passport = require("passport");
var router = express.Router();
const cors = require('./cors'); 
router.use(bodyParser.json());
/* GET users listing. */

router.get("/", (req, res, next)=> {

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

router.delete("/" , (req, res, next) => {
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


router.post("/signup" , (req, res, next) => {
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
  });
  User.register(user, req.body.password, (err, user) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json");
      res.json({ err: err  });

    } else {
      passport.authenticate("local")(req, res, () => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json({ success: true, status: "Registration Successful!" });
      });
    }
  });
});


router.post('/login', cors.corsWithOptions, (req, res, next) => {

  passport.authenticate('local', (err, user, info) => {
    if (err)
      return next(err);

    if (!user) {
      res.statusCode = 401;
      res.setHeader('Content-Type', 'application/json');
      res.json({success: false, status: 'Login Unsuccessful!', err: info});
    }
    req.logIn(user, (err) => {
      if (err) {
        res.statusCode = 401;
        res.setHeader('Content-Type', 'application/json');
        res.json({success: false, status: 'Login Unsuccessful!', err: 'Could not log in user!'});          
      }

      var token = authenticate.getToken({_id: req.user._id});
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json({success: true, status: 'Login Successful!', token: token});
    }); 
  }) (req, res, next);
});



router.get("/logout", cors.corsWithOptions , (req, res) => {
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
 


router.get('/checkJWTToken', cors.corsWithOptions , (req,res)=>{
  passport.authenticate('jwt',{session:false},(err,user,info)=>{
     if(err)
        return next(err);
     
     if(!user){
        res.statusCode = 401 ; 
        res.setHeader("Content-Type", "application/json");
        return res.json({
                         status : 'JWT Invalid!' ,
                         success : false , 
                         err : info 
                        });   
     }
    else{
        res.statusCode = 200 ; 
        res.setHeader("Content-Type", "application/json");
        return res.json({
                         status : 'JWT Valid!' ,
                         success : true , 
                         user : user 
                        });
    }
  })(req,res);  
})

module.exports = router;
