const express = require("express");
const app = express();

app.listen(3048, (req, res) => {
  console.log("Working....");
});

app.get("/event/:id", (req, res) => {
  const id = req.params.id;

  res.json({
    status: true,
    id: id,
  });
});
