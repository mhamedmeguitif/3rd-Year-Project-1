

/*
======

Dans cette section, nous enregistrons la demande du chercheur de participer à la conférence, 
qui sera ensuite traitée par le propriétaire de la conférence
====
 */
var express = require("express");
const DemandRouter = express.Router();
const mongoose = require("mongoose");
const Demand_Model = require("../models/DemandePrticipationConf");
var authenticate = require("../authenticate");

DemandRouter.route("/")
  .get(authenticate.verifyUser ,(req, res, next) => {
    Demand_Model.find({})
      .populate("IdChercheur")
      .populate("IdConference")
      .then(
        (Demand) => {
          res.statusCode = 200;
          res.setHeader("content-Type", "application/json");
          res.json(Demand);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .post(authenticate.verifyUser ,(req, res, next) => {
    req.body.IdChercheur = req.user._id;

    Demand_Model.create(req.body)
      .populate('IdChercheur')
      .populate('IdConference')
      .then(
        (Demand) => {
          res.statusCode = 200;
          res.setHeader("content-Type", "application/json");
          res.json(Demand);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .put(authenticate.verifyUser ,(req, res, next) => {
    res.statusCode = 403;
    res.end("PUT Operation not supported ");
  })
  .delete(authenticate.verifyUser, (req, res, next) => {
    Demand_Model.remove({})
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
/*Partie deux */
DemandRouter.route("/:Demand")
  .get(authenticate.verifyUser ,(req, res, next) => {
    Demand_Model.findById(req.params.Demand)
      .populate("IdChercheur")
      .populate("IdConference")
      .then(
        (Demand) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(Demand);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .post(authenticate.verifyUser ,(req, res, next) => {
    res.statusCode = 403;
    res.end("POST operation not supported   " + req.params.conference);
  })
  .put(authenticate.verifyUser, (req, res, next) => {
    Demand_Model.findByIdAndUpdate(
      req.params.Demand,
      { $set: req.body },
      { new: true }
    )
      .populate("IdChercheur")
      .populate("IdConference")
      .then(
        (Demand) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(Demand);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .delete(authenticate.verifyUser, (req, res, next) => {
    Confer.findByIdAndRemove(req.params.Demand)
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

DemandRouter.route("/user")
.get(authenticate.verifyUser, (req, res, next) => {
  Confer.find({ IdChercheur: req.user._id })
    .populate("IdChercheur")
    .populate("IdConference")
    .then(
      (Demand) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(Demand);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});
module.exports = DemandRouter;
