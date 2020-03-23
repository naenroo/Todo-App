const express = require('express');
const { check } = require('express-validator');
const userController = require('../controller/user');
const { requireSignin } = require('../middleware/requireSignIn');

const router = express.Router();

router.post(
  '/login',
  [
    check('email', 'Email not valid..!').isEmail(),
    check('password', 'password is required min.6 characters').exists()
  ],
  userController.userLogin
);

router.post(
  '/register',
  [
    check('name', 'please add your name')
      .not()
      .isEmpty(),
    check('email', 'please input valid email').isEmail(),
    check('password', 'please enter password 6 characters').isLength({ min: 6 })
  ],
  userController.userRegister
);

router.get('/logout', requireSignin, userController.logOut);

router.get('/user', requireSignin, userController.getUser);

module.exports = router;
