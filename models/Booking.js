const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  activityId: String,
});

module.exports = mongoose.model('Booking', bookingSchema);
