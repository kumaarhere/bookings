const Activity = require('../models/Activity');

// Hardcoded sample data for demo
const sampleActivities = [
  {
    _id: '1',
    title: 'Cricket Match',
    description: 'Weekend cricket match at local ground.',
    location: 'City Cricket Ground',
    datetime: new Date('2025-04-12T10:00:00Z'),
  },
  {
    _id: '2',
    title: 'Movie Night',
    description: 'Group movie night at the theater.',
    location: 'City Cinema Hall',
    datetime: new Date('2025-04-13T19:00:00Z'),
  },
];

exports.getActivities = async (req, res) => {
  try {
    // For demo purposes, return static list
    res.json(sampleActivities);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch activities' });
  }
};
