var express = require("express");
const ArticleRouter = express.Router();
const mongoose = require("mongoose");
const Article_Model = require("../models/Article");
var authenticate = require("../authenticate");
ArticleRouter.route("/user").get(authenticate.verifyUser, (req, res, next) => {
  Article_Model.findOne({ chercheurId: req.user._id })
    .populate("chercheurId")
    .populate("ConferenceId")
    .then(
      (article) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(article);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});
ArticleRouter.route("/")

  .get(authenticate.verifyUser, (req, res, next) => {
    Article_Model.find({})
      // .populate("chercheurId")
      // .populate("ConferenceId")
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
  ArticleRouter.route("/:conference")
  .post(authenticate.verifyUser, (req, res, next) => {
    req.body.chercheurId = req.user._id;
    req.body.ConferenceId = req.params.conference;
    Article_Model.create(req.body)
      .then(
        (Article) => {
          Article_Model.findById(Article._id)
          .populate("ConferenceId")          
          .populate("chercheurId")
            .then((article) => {
              console.log("Article created ", article);
              res.statusCode = 200;
              res.setHeader("Content-Type", "application/json");
              res.json(article);
            });
        },
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
  .post(authenticate.verifyUser, (req, res) => {
    Article_Model.findById(req.params.Article)
      // .populate("chercheurId")
      // .populate("ConferenceId")
      .then(
        (article) => {
          console.log("article created ", article);
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(article);
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
      // .populate("chercheurId")
      // .populate("ConferenceId")

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
      // .populate("chercheurId")
      // .populate("ConferenceId")

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
/*cette route pour trouver tout les articles pour une conférence */
ArticleRouter.route("/conference/:conf").get(authenticate.verifyUser, (req, res, next) => {
  Article_Model.find({ ConferenceId: req.params.conf })
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
});
module.exports = ArticleRouter;
