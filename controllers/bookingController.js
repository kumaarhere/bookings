const Booking = require('../models/Booking');

exports.createBooking = async (req, res) => {
  const { activityId } = req.body;
  const userId = req.userId;

  try {
    const booking = new Booking({ userId, activityId });
    await booking.save();
    res.status(201).json({ message: 'Activity booked successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to book activity' });
  }
};

exports.getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.userId }).lean();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
};
