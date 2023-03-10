const Joi = require('joi');
const jwt = require('jsonwebtoken');


//Register validation
const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
  });

  return schema.validate(data);
}


//log in validation
const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
  });
  return schema.validate(data);
}


// logic to verify token
const verifyToken = (req, res, next) => {
  const token = req.header("auth-token");
    
    if (!token) 
      return res.status(401).json({ error: 'Access denied'});
    

    try{
      const verified = jwt.verify(token, process.env.TOKEN_SECRET);
      req.user = verified;
      next();
    } 
    catch (error) {
      return res.status(400).json({error: 'Invalid token'});
  } 

};

module.exports = {
  registerValidation,
  loginValidation,
  verifyToken
};

