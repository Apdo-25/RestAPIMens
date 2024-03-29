const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

//swagger
const swaggerUI = require("swagger-ui-express");
const yaml = require("yamljs");

//swagger setup
const swaggerDocument = yaml.load("./swagger.yaml");
app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));


// import routes
const carRoutes = require("./routes/routes");
const authRoutes = require("./routes/auth");


require("dotenv-flow").config();

// parse request - content type JSON
app.use(bodyParser.json());

mongoose.set('strictQuery', false);

mongoose.connect(

  process.env.DBHOST, {

    useUnifiedTopology: true,
    useNewUrlParser: true
  }
).catch(error => console.log("Error conncecting to MongoDB:" + error));

mongoose.connection.once("open", () => console.log("Connected succesfully to MongoDB"));

//routes
app.get("/", (req, res) => {
  res.status(200).send({message: "Welcome to the Car REST API homepage"})
});


// post, put, delete
app.use("/api/cars", carRoutes);
app.use("/api/user", authRoutes);


const PORT = process.env.PORT || 4000;

//start up server on port 4000
app.listen(PORT, function() {
  console.log("Server is running on port: " + PORT);
});

module.exports = app;