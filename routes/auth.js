const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const { registerValidation, loginValidation } = require('../validations/authValidator');

router.post('/register', registerValidation, register);
router.post('/login', loginValidation, login);

module.exports = router;
