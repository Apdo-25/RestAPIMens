const Router = require('express').Router;   //Router function from express
const User = require('../models/user'); //User model
const {registerValidation} = require('../validation'); //User validation
const router = new Router();


//Registration Route
router.post('/register', async (req, res) => {

  //user input validation
  const { error } = registerValidation(req.body);

  if (error) { 
    return res.status(400).send(error.details[0].message);
  }
  //check if email already exists

  //hash password

  //create user


});


//Login Route
router.post('/login', (req, res) => {







  return res.status(200).json({message: 'Login route'});
  
});

module.exports = router;


