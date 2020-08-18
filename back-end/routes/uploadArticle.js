const express = require("express");
const bodyParser = require("body-parser");
const authenticate = require("../authenticate");
const multer = require("multer");
var Article = require("../models/Article");

/*-----  Multer Configuration ----*/
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/files/Articles");
  },

  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const ArticleFileFilter = (req, file, cb) => {
  if (!file.originalname.match(/\.(pdf)$/)) {
    return cb(new Error("You can upload only pdf files!"), false);
  }
  cb(null, true);
};

const upload = multer({ storage: storage, fileFilter:ArticleFileFilter});

const uploadRouter = express.Router();

uploadRouter.use(bodyParser.json());

uploadRouter
  .route("/:article")
  .get(authenticate.verifyUser, (req, res, next) => {
    Article.findById(req.params.article).then((article)=>{
      var path1= article.Article_Pdf; 
      res.statusCode = 200 ;  
      res.sendfile(path1);
    }).catch(err=>next(err)); 
   

  });
  uploadRouter.route('/')
  .post(
    authenticate.verifyUser,
    upload.single("ArticleFile"),
    (req, res, next) => {
      const userId = req.user._id;
      console.log(req.user._id);
      Article.findByIdAndUpdate(
        userId,
        { Article_Pdf: req.file.path },
        { new: true }
      )
        .then(
          (article) => {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(article);
          },
          (err) => next(err)
        )
        .catch((err) => next(err));
    }
  )
  .put(authenticate.verifyUser, (req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /imageUpload");
  })
  .delete(authenticate.verifyUser, (req, res, next) => {
    res.statusCode = 403;
    res.end("DELETE operation not supported on /imageUpload");
  });
module.exports = uploadRouter;
