const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

require("dotenv-flow").config();


//routes
app.get("/api/home", (req, res) => {
  res.status(200).send({message: "Welcome to the men REST API homepage"})
})

mongoose.connect(

  process.env.DBHOST, {

    useUnifiedTopology: true,
    useNewUrlParser: true
  }
).catch(error => console.log("Error conncecting to MongoDB:" + error));

mongoose.connection.once("open", () => console.log("Connected succesfully to MongoDB"));

const PORT = process.env.PORT || 4000;

//start up server on port 4000
app.listen(PORT, function() {
  console.log("Server is running on port: " + PORT);
})

module.exports = app;