const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const HttpError = require('../models/http-error');
const { userModel } = require('../models/userSchema');
require('dotenv').config();

const userRegister = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array()[0] });
  }

  const userExists = await userModel.findOne({ email: req.body.email });
  if (userExists) {
    return res.status(403).json({ error: 'user already exist' });
  }

  try {
    const user = await new userModel(req.body);
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    next(new HttpError('Server Error, failed register user', 500));
  }
};

const userLogin = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array()[0] });
  }

  try {
    const { email } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'user not found' });
    }

    const token = jwt.sign({ _id: user._id }, process.env.jwtsecret);
    res.cookie('Bearer', token, {
      expire: new Date() + 14000
    });

    res.status(200).json({ msg: 'user success login', token });
  } catch (error) {
    next(new HttpError('Server Error, failed login user', 500));
  }
};

const logOut = (req, res, next) => {
  try {
    res.clearCookie('Bearer');
    return res.status(200).json({ msg: 'logout success' });
  } catch (error) {
    next(new HttpError('Server Error, failed logout user', 500));
  }
};

const getUser = async (req, res, next) => {
  try {
    const user = await userModel.find({});
    res.status(200).json({ user });
  } catch (error) {
    next(new HttpError('failed getting users', 500));
  }
};

exports.userLogin = userLogin;
exports.userRegister = userRegister;
exports.logOut = logOut;
exports.getUser = getUser;
