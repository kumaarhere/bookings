const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};
