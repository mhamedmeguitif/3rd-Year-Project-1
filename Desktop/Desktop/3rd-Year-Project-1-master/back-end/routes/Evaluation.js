
/*

Dans cette section, nous enregistrons l'évaluation de l'evaluateur 
 */
var express = require("express");
const EvaluationRouter = express.Router();
const mongoose = require("mongoose");
const Evaluation_Model = require("../models/Evaluation");
var authenticate = require("../authenticate");

EvaluationRouter.route("/")
  .get( authenticate.verifyUser ,(req, res, next) => {
    Evaluation_Model.find({})
      .populate("IdEvaluateur")
      .populate("IdConference")
      .populate("IdThemes")
      .populate("IdArticle")
      .then(
        (Evaluation) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(Evaluation);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })

  .post(authenticate.verifyUser, (req, res, next) => {
    Evaluation_Model.create(req.body)
      .populate("IdEvaluateur")
      .populate("IdConference")
      .populate("IdThemes")
      .populate("IdArticle")
      .then(
        (Evaluation) => {
          Evaluation_Model.findById(Evaluation._id).then((Evaluation) => {
            console.log("Evaluation created ", Evaluation);
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(Evaluation);
          });
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })

  .put(authenticate.verifyUser , (req, res, next) => {
    res.statusCode = 403;
    res.end("PUT Operation not supported  on /Evaluation_Modelences ");
  })

  .delete(authenticate.verifyUser, (req, res, next) => {
    Evaluation_Model.remove({})
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

/*parie2  */
EvaluationRouter.route("/:Evaluation")

  .get(authenticate.verifyUser ,(req, res, next) => {
    Evaluation_Model.findById(req.params.Evaluation)
      .populate("IdEvaluateur")
      .populate("IdConference")
      .populate("IdThemes")
      .populate("IdArticle")
      .then(
        (Evaluation) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(Evaluation);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })

  .post(authenticate.verifyUser ,(req, res, next) => {
    res.statusCode = 403;
    res.end("POST operation not supported   ");
  })

  .put(authenticate.verifyUser, (req, res, next) => {
    Evaluation_Model.findByIdAndUpdate(
      req.params.Evaluation_Modelence,
      { $set: req.body },
      { new: true }
    )
      .populate("IdEvaluateur")
      .populate("IdConference")
      .populate("IdThemes")
      .populate("IdArticle")
      .then(
        (Evaluation) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(Evaluation);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })

  .delete(authenticate.verifyUser, (req, res, next) => {
    Evaluation_Model.findByIdAndRemove(req.params.Evaluation)
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

EvaluationRouter.route("/user").get(
  authenticate.verifyUser,
  (req, res, next) => {
    Evaluation_Model.find({ Evaluation_er: req.user._id })
      .populate("IdEvaluateur")
      .populate("IdConference")
      .populate("IdThemes")
      .populate("IdArticle")
      .then(
        (Evaluation) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(Evaluation);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  }
);

module.exports = EvaluationRouter;
