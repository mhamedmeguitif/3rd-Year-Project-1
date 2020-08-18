var express = require("express");
const ParticipantRouter = express.Router();
const mongoose = require("mongoose");
const Partisipant_Model = require("../models/Participant");
var authenticate = require("../authenticate");

ParticipantRouter.route("/")
  .get(authenticate.verifyUser , (req, res, next) => {
    Partisipant_Model.find({})
      .then(
        (Participant) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(Participant);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })

  .post(authenticate.verifyUser, (req, res, next) => {
    Partisipant_Model.create(req.body)
      .then(
        (Partisip) => {
          Partisipant_Model.findById(Evaluation._id).then((Evaluation) => {
            console.log("Participant created ");
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(Partisip);
          });
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })

  .put(authenticate.verifyUser , (req, res, next) => {
    res.statusCode = 403;
    res.end("PUT Operation not supported  on /Partisipant_Modelences ");
  })

  .delete(authenticate.verifyUser, (req, res, next) => {
    Partisipant_Model.remove({})
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

/*--------------------------------*/
ParticipantRouter.route("/:Participant")
  .get(authenticate.verifyUser , (req, res, next) => {
    Partisipant_Model.findById(req.params.Participant)
      .then(
        (Participant) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(Participant);
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
    Partisipant_Model.findByIdAndUpdate(
      req.params.Participant,
      { $set: req.body },
      { new: true }
    )
      .then(
        (Participant) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(Participant);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })

  .delete(authenticate.verifyUser, (req, res, next) => {
    Partisipant_Model.findByIdAndRemove(req.params.Participant)
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

module.exports = ParticipantRouter;
