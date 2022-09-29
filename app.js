const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(express.json());
app.use(cors());

//routes
const tourRoute = require("./routes/tour.route");

app.get("/", (req, res) => {
  res.send("Route is working");
});
app.use("/tours", tourRoute);

module.exports = app;
