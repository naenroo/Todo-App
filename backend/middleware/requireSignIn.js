const expressJwt = require('express-jwt');
require('dotenv').config();

const requireSignin = expressJwt({
  secret: process.env.jwtsecret,
  userProperty: 'auth'
});

exports.requireSignin = requireSignin;
