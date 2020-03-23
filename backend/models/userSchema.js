const mongoose = require('mongoose');
const uuid = require('uuid');
const crypto = require('crypto');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    minlength: 5,
    required: true
  },
  hashed_password: {
    type: String,
    minlength: 6,
    required: true
  },
  SALT: { type: String },
  email: {
    type: String,
    trim: true,
    unique: 1,
    required: true
  },
  created: {
    type: String,
    default: Date.now
  },
  date: {
    type: Date,
    default: Date.now
  }
});

userSchema
  .virtual('password')
  .set(function(password) {
    this._password = password;
    this.salt = uuid.v4();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function() {
    return this._password;
  });

userSchema.methods = {
  authenticate: function(plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },

  encryptPassword: function(password) {
    if (!password) {
      return '';
    }

    try {
      return crypto
        .createHash('sha512', this.salt)
        .update(password)
        .digest('hex');
    } catch (error) {
      return '';
    }
  }
};

const userModel = mongoose.model('userModel', userSchema);
module.exports = { userModel };
