const express = require("express");
const app = express();
require("dotenv").config();

const eventController = require("./Controllers/eventController");

app.listen(process.env.LOCAL_POST, (req, res) => {
  console.log("Working....");
});

app.use(express.json());

app.use("/api/v1/event/", eventController);
