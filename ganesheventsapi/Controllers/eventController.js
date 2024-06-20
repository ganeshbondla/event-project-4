const express = require("express");
const router = express.Router();
const { RandomSixDigits } = require("../Helpers/helper");
const database = require("../Config/database");

//create
router.post("/create", (req, res) => {
  const eventName = req.body.event_name;
  const eventPrice = req.body.event_price;
  const eventDesc = req.body.event_desc;
  const eventDate = req.body.event_date;
  const eventAddress = req.body.event_address;
  const eventId = Math.floor(100000 + Math.random() * 999999);

  const checkQuery = `SELECT * FROM events WHERE event_name='${eventName}' AND event_price='${eventPrice}' AND isDeleted='0'`;
  database.query(checkQuery, (err, results) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
        err,
      });
    } else {
      if (results.length > 0) {
        res.status(200).json({
          success: true,
          message: "Same Event Name and Price Already Created, Try Diffrent!",
        });
      } else {
        const runQuery = `INSERT INTO events(event_name, event_price, event_desc, event_id, event_address, event_date, status, isDeleted)
        VALUES('${eventName}','${eventPrice}','${eventDesc}','${eventId}','${eventAddress}','${eventDate}','0','0')`;

        database.query(runQuery, (err, results) => {
          if (err) {
            res.status(500).json({
              success: false,
              message: "Event is Not Created",
              err,
            });
          } else {
            res.status(201).json({
              success: true,
              message: "Event Successfully Created",
              results,
            });
          }
        });
      }
    }
  });
});

//read list
router.get("/list", (req, res) => {
  const listQuery = `SELECT * FROM events WHERE isDeleted='0'`;
  database.query(listQuery, (err, results) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
        err,
      });
    } else {
      if (results.length > 0) {
        res.status(200).json({
          success: true,
          results,
        });
      } else {
        res.status(204).json({
          success: true,
          message: "No Events Found!",
        });
      }
    }
  });
});

//by id
router.get("/:id", (req, res) => {
  const eventId = req.params.id;

  const getByIdQuery = `SELECT * FROM events WHERE id='${eventId}' AND isDeleted='0'`;

  database.query(getByIdQuery, (err, results) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
        err,
      });
    } else {
      if (results.length > 0) {
        res.status(200).json({
          success: true,
          results,
        });
      } else {
        res.status(200).json({
          success: false,
          message: "No Event Found On Provided ID!",
        });
      }
    }
  });
});

//delete
router.delete("/delete/:id", (req, res) => {
  const eventId = req.params.id;

  const checkId = `SELECT * FROM events WHERE id='${eventId}' AND isDeleted='0'`;

  database.query(checkId, (err, results) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
        err,
      });
    } else {
      if (results.length > 0) {
        const deleteQuery = `UPDATE events SET isDeleted='1' WHERE id='${eventId}'`;

        database.query(deleteQuery, (err, results) => {
          if (err) {
            res.status(500).json({
              success: false,
              message: "Internal Server Error",
              err,
            });
          } else {
            res.status(200).json({
              success: true,
              message: "Event Deleted Success",
            });
          }
        });
      } else {
        res.status(200).json({
          success: false,
          message: "No Event Founf on Provided ID",
        });
      }
    }
  });
});

module.exports = router;
