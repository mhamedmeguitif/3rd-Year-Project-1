var express = require("express");
const ArticleRouter = express.Router();
const mongoose = require("mongoose");
const Article_Model = require("../models/Article");
var authenticate = require("../authenticate");

ArticleRouter.route("/")

  .get(authenticate.verifyUser, (req, res, next) => {
    Article_Model.find({})
   
      .populate("Theme")
      .populate("chercheurId")
      .populate("ConferenceId")
      .then(
        (Article) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(Article);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .post(authenticate.verifyUser, (req, res, next) => {
    req.body.chercheurId = req.user._id;
    req.body.ConferenceId = req.params.conference;

    Article_Model.create(req.body)
     
      .populate("Theme")
      .populate("chercheurId")
      .populate("ConferenceId")
      .then(
        (Article) => {},
        (err) => next(err)
      )
      .catch((err) => next(err));
  })

  .put(authenticate.verifyUser, (req, res, next) => {
    res.statusCode = 403;
    res.end("PUT Operation not supported  on /conferences ");
  })

  .delete(authenticate.verifyUser, (req, res, next) => {
    Article_Model.remove({})
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

ArticleRouter.route("/:Article")
.get(authenticate.verifyUser, (req, res, next) => {
  Article_Model.findById(req.params.Article)
    .then(
      (Article) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(Article);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
})
.post(authenticate.verifyUser, (req, res) => {
  Article_Model.findById(req.params.Article)
    .then(
      (Article) => {
        let form = new formidable.IncomingForm();
        form.keepExtensions = true;
        form.parse(req, (err, fields, files) => {
          if (err) {
            return res.status(400).json({
              error: "File could not be uploaded",
            });
          }
          if (files.Article_Pdf) {
            Article.photo.data = fs.readFileSync(files.Article_Pdf.path);
            Article.photo.contentType = files.Article_Pdf.type;
          }
          Article.save((err, result) => {
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
})

  .put(authenticate.verifyUser, (req, res, next) => {
    Article_Model.findByIdAndUpdate(
      req.params.Article,
      { $set: req.body },
      { new: true }
    )
      .then(
        (Article) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(Article);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })

  .delete(authenticate.verifyUser, (req, res, next) => {
    Article_Model.findByIdAndRemove(req.params.Article)
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

module.exports = ArticleRouter;
