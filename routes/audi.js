const router = require("express").Router();
const AudiProduct = require("../models/audi");


// CRUD operations 

// create a new product
router.post("/", (req, res) => {

  data = req.body;

  AudiProduct.insertMany(data)
  .then(data =>  { res.send(data);}) 
  .catch(err => { res.status(500).send( {message: err.message }); })

});

// read all products
router.get("/", (req, res) => {

  AudiProduct.find()
  .then(data =>  { res.send(data);}) 
  .catch(err => { res.status(500).send( {message: err.message }); })

});

// find Audis by instock status
router.get("/inStock", (req, res) => {

  AudiProduct.find({inStock: false})
  .then(data =>  { res.send(data);}) 
  .catch(err => { res.status(500).send( {message: err.message }); })

});

// read specific Audis by id
router.get("/:id", (req, res) => {

  AudiProduct.findById(req.params.id)
  .then(data =>  { res.send(data);}) 
  .catch(err => { res.status(500).send( {message: err.message }); })

});



// update specific Audis by id

router.put("/:id", (req, res) => {

  const id = req.params.id;

  AudiProduct.findByIdAndUpdate(id, req.body)
  .then(data =>  { 
    
    if (!data) 
    {
      res.status(404).send({message: "No Audi found with that id."});
    } 
    else {
    res.send({message: "Audi was updated successfully."});     
    }

  })  
  .catch(err => { res.status(500).send( {message: "Error updating Audi with this id=" + id }); })

});

// delete specific products
router.delete("/:id", (req, res) => {

  const id = req.params.id;

  AudiProduct.findByIdAndDelete(id, req.body)
  .then(data =>  { 
    
    if (!data) 
    {
      res.status(404).send({message: "No Audi found with that id."});
    } 
    else {
    res.send({message: "Audi was deleted successfully."});     
    }

  })  
  .catch(err => { res.status(500).send( {message: "Error deleting Audi with this id=" + id }); })

});


module.exports = router;