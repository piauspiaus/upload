const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

app.use(cors());
app.options("*", cors());

//middleware
app.use(bodyParser.json());
app.use(morgan("tiny"));

app.use("/public/uploads", express.static(__dirname + "/public/uploads"));

//Routes

const productsRoutes = require("./controllers/image");

const api = process.env.API_URL;

app.use(`${api}/products`, productsRoutes);

//Database
mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "myFirstDatabase",
  })
  .then(() => {
    console.log("Database Connection is ready...");
  })
  .catch((err) => {
    console.log(err);
  });

//Server
let server = app.listen(process.env.PORT || 3000, function () {
  var port = server.address().port;
  console.log("express is working" + port);
});
