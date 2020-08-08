
var express = require('express');
const ThemesRouter = express.Router();
const mongoose = require('mongoose');
const Themes = require('../models/Themes');
var authenticate = require('../authenticate');


ThemesRouter.route('/')
    .get(authenticate.verifyUser , (req, res, next) => {
        Themes.find({})
            .then((Theme) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(Theme)
            }, (err) => next(err))
            .catch((err) => next(err));
    })


    .post(authenticate.verifyUser, (req, res, next) => {


        Themes.create(req.body)
            .then((Theme) => {
                Themes.findById(Theme._id)
                    .then((Theme) => {
                        console.log('Theme created ', Themes);
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'application/json');
                        res.json({ success: true, status: "successful!", body: Theme });
                    })
            }, (err) => next(err))
            .catch((err) => next(err));
    })

    .put(authenticate.verifyUser , (req, res, next) => {
        res.statusCode = 403;
        res.end('PUT Operation not supported  on /conferences ');
    })

    .delete(authenticate.verifyUser, (req, res, next) => {
        Themes.remove({})
            .then((resp) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(resp);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

/*parie2  */
ThemesRouter.route('/:Theme')

    .get(authenticate.verifyUser , (req, res, next) => {
        Themes.findById(req.params.Theme)
            .then((Theme) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(Theme)
            }, (err) => next(err))
            .catch((err) => next(err));
    })

    .post(authenticate.verifyUser , (req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /Themes/  ' + req.params.Theme);
    })

    .put(authenticate.verifyUser, (req, res, next) => {
        Themes.findByIdAndUpdate(req.params.Theme, { $set: req.body }, { new: true })
            .then((Theme) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(Theme)
            }, (err) => next(err))
            .catch((err) => next(err));

    })

    .delete(authenticate.verifyUser, (req, res, next) => {
        Confer.findByIdAndRemove(req.params.Theme)
            .then((resp) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(resp);
            }, (err) => next(err))
            .catch((err) => next(err));
    });
module.exports = ThemesRouter; 