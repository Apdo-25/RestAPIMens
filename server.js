const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

// product routes
const AudiRoutes = require("./routes/audi");

require("dotenv-flow").config();

// parse request - content type JSON
app.use(bodyParser.json());

mongoose.connect(

  process.env.DBHOST, {

    useUnifiedTopology: true,
    useNewUrlParser: true
  }
).catch(error => console.log("Error conncecting to MongoDB:" + error));

mongoose.connection.once("open", () => console.log("Connected succesfully to MongoDB"));

//routes
app.get("/api/home", (req, res) => {
  res.status(200).send({message: "Welcome to the Audi REST API homepage"})
});


// post, put, delete
app.use("/api/audis", AudiRoutes);



const PORT = process.env.PORT || 4000;

//start up server on port 4000
app.listen(PORT, function() {
  console.log("Server is running on port: " + PORT);
});

module.exports = app;