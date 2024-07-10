const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

const eventController = require("./Controllers/eventController");
const userController = require("./Controllers/userController");

app.listen(process.env.LOCAL_POST, (req, res) => {
  console.log("Working....");
});

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use("/api/v1/event/", eventController);
app.use("/api/v1/user/", userController);
