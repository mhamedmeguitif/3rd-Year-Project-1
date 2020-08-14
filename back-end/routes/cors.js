const express = require("express");
const cors = require("cors");
const app = express();
const WhiteList = [
  "https://localhost:3443",
  "http://localhost:3001/",
  "http://DESKTOP-79QR4P1:3001/",
];
var corsOptionsDelegate = (req, callback) => {
  var corsOptions;
  if (WhiteList.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true };
  } else {
    corsOptions = { origin: true };
  }
  callback(null, corsOptions);
};

exports.cors = cors();
exports.corsWithOptions = cors(corsOptionsDelegate);
