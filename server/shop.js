const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const itemRouter = require("./routes/item_routes");
const http = require("http");

const port = 3000;

const app = express();
// Setting up database
const dbConn = "mongodb://localhost/my_shop";
// Set four properties to avoid deprecation warnings:
mongoose.connect(
  dbConn,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  },
  err => {
    if (err) {
      console.log("Error connecting to database", err);
    } else {
      console.log("Connected to database!");
    }
  }
);

app.use(cors());
app.use(bodyParser.json());

//routing
app.use("/api/items", itemRouter);

const server = app.listen(port, () => {
  console.log(`Shop express app listening on port ${port}`);
});
