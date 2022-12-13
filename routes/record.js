const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");

recordRoutes
  .route("https://yogaform-production-c892.up.railway.app/record/add")
  .post(function (req, response) {
    let db_connect = dbo.getDb();
    let myobj = {
      age: req.body.age,
      slot: req.body.slot,
    };
    db_connect.collection("records").insertOne(myobj, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
  });

module.exports = recordRoutes;
