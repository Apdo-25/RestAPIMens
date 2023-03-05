const router = require("express").Router();
const carProduct = require("../models/car");
const { verifyToken } = require('../validation');



// CRUD operations 

// create a new car
router.post("/",  verifyToken, (req, res) => {

  data = req.body;

  carProduct.insertMany(data)
  .then(data =>  { res.send(data);}) 
  .catch(err => { res.status(500).send( {message: err.message }); })

});

// read all cars
router.get("/", (req, res) => {

  carProduct.find()
  .then(data =>  { res.send(data);}) 
  .catch(err => { res.status(500).send( {message: err.message }); })

});

// find carss by instock status
router.get("/inStock", (req, res) => {

  carProduct.find({inStock: false})
  .then(data =>  { res.send(data);}) 
  .catch(err => { res.status(500).send( {message: err.message }); })

});

// find specific Car by id
router.get("/:id", (req, res) => {

  carProduct.findById(req.params.id)
  .then(data =>  { res.send(data);}) 
  .catch(err => { res.status(500).send( {message: err.message }); })

});



// update specific cars by id
router.put("/:id", verifyToken, (req, res) => {

  const id = req.params.id;

  carProduct.findByIdAndUpdate(id, req.body)
  .then(data =>  { 
    
    if (!data) 
    {
      res.status(404).send({message: "No car found with that id."});
    } 
    else {
    res.send({message: "Car was updated successfully."});     
    }

  })  
  .catch(err => { res.status(500).send( {message: "Error updating Car with this id=" + id }); })

});

// delete specific car
router.delete("/:id", verifyToken, (req, res) => {

  const id = req.params.id;

  carProduct.findByIdAndDelete(id, req.body)
  .then(data =>  { 
    
    if (!data) 
    {
      res.status(404).send({message: "No car found with that id."});
    } 
    else {
    res.send({message: "Car was deleted successfully."});     
    }

  })  
  .catch(err => { res.status(500).send( {message: "Error deleting car with this id=" + id }); })

});


module.exports = router;