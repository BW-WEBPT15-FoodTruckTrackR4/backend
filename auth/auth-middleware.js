const jwt = require('jsonwebtoken')
const secrets = require('../config/secrets.js')
module.exports = (req, res, next) => {
    // if(req.session && req.session.user){
    //   next();
    // } else {
    // res.status(401).json({ you: 'shall not pass!' });
    // }
   
      const token = req.headers.authorization
  
      if(token) {
          jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
              if (err) {
                  res.status(401).json({ message: 'you shall not pass!'})
              } else {
                  req.decodedJwt = decodedToken
                  next();
              } 
          })
      } else {
          res.status(401).json({ message: " you cant touch that"})
      }
  }

  