const express = require('express');
const router = express.Router();
const authJwt = require('../middleware/authJwt');
const { createBooking, getMyBookings } = require('../controllers/bookingController');

router.post('/', authJwt, createBooking);
router.get('/me', authJwt, getMyBookings);

module.exports = router;
