const express = require("express");
const bodyParser = require("body-parser");
const authenticate = require("../authenticate");
const multer = require("multer");
const cors = require("./cors");
var User = require("../models/User");

var today = new Date() ; 
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/files/profile__images");
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    cb(null,date + '-' + fileName)
  },
});

const imageFileFilter = (req, file, cb) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return cb(new Error("You can upload only image files!"), false);
  }
  cb(null, true);
};

const upload = multer({ storage: storage, fileFilter: imageFileFilter });

const uploadRouter = express.Router();

uploadRouter.use(bodyParser.json());
 
uploadRouter
  .route("/")
  .get(authenticate.verifyUser, (req, res, next) => {
    User.findById(req.user._id).then((user)=>{
      var path1= user.photo; 
      res.statusCode = 200 ;  
      res.sendfile(path1);
    }).catch(err=>next(err)); 
     
  })
  .post(
    authenticate.verifyUser,
    upload.single("imageFile"),
    (req, res, next) => {
      const userId = req.user._id;
      console.log(req.user._id);
      const url = req.protocol + '://' + req.get('host'); 
      const update = url + '/public/files/profile__images/' + req.file.filename; 
      User.findByIdAndUpdate(userId, { photo: update}, { new: true })
        .then(
          (user) => {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(user);
          },
          (err) => next(err)
        )
        .catch((err) => next(err));
    }
  )

  .put(authenticate.verifyUser,  (req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /imageUpload");
  })
  .delete(
    authenticate.verifyUser,
    (req, res, next) => {
      res.statusCode = 403;
      res.end("DELETE operation not supported on /imageUpload");
    }
  );
  
    


module.exports = uploadRouter;
