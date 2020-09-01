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
  uploadRouter.route('/:article')
  .post(
    upload.single("ArticleFile"),
    (req, res, next) => {
      const ArticleId = req.params.article;
      Article.findByIdAndUpdate(
        ArticleId,
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
  .put(
    authenticate.verifyUser,
    upload.single("ArticleFile"),
    (req, res, next) => {
      const ArticleId = req.params.article;
      Article.findByIdAndUpdate(
        ArticleId,
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
  );
module.exports = uploadRouter;
