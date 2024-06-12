const express = require("express");
const app = express();

const eventController = require("./Controllers/eventController");

app.listen(3048, (req, res) => {
  console.log("Working....");
});

app.use(express.json());

app.use("/api/v1/event/", eventController);
