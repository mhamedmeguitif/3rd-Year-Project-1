/*

Dans cette section, nous enregistrons l'évaluation finale 
 */
var express = require("express");
const EvaluationFinalRouter = express.Router();
const mongoose = require("mongoose");
const EvaluationFinal_Model = require("../models/EvaluationFinal");
var authenticate = require("../authenticate");

EvaluationFinalRouter.route("/")
  .get(authenticate.verifyUser , (req, res, next) => {
    EvaluationFinal_Model.find({})
      .populate("Evaluations")
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
    EvaluationFinal_Model.create(req.body)
      .populate("Evaluations")
      .populate("IdConference")
      .populate("IdThemes")
      .populate("IdArticle")
      .then(
        (Evaluation) => {
          EvaluationFinal_Model.findById(Evaluation._id).then((Evaluation) => {
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
    res.end("PUT Operation not supported  on /EvaluationFinal_Modelences ");
  })

  .delete(authenticate.verifyUser, (req, res, next) => {
    EvaluationFinal_Model.remove({})
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
EvaluationFinalRouter.route("/:Evaluation")

  .get(authenticate.verifyUser , (req, res, next) => {
    EvaluationFinal_Model.findById(req.params.Evaluation)
      .populate("Evaluations")
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

  .post(authenticate.verifyUser , (req, res, next) => {
    res.statusCode = 403;
    res.end("POST operation not supported   ");
  })

  .put(authenticate.verifyUser, (req, res, next) => {
    EvaluationFinal_Model.findByIdAndUpdate(
      req.params.Evaluation,
      { $set: req.body },
      { new: true }
    )
      .populate("Evaluations")
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
    EvaluationFinal_Model.findByIdAndRemove(req.params.Evaluation)
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

EvaluationFinalRouter.route("/user").get(
  authenticate.verifyUser,
  (req, res, next) => {
    EvaluationFinal_Model.find({ Evaluation: req.user._id })
      .populate("Evaluations")
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

module.exports = EvaluationFinalRouter;
