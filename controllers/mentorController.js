const Mentor = require('../models/mentorModel');

exports.createMentor = async (req, res) => {
  try {
    const { name, email, expertise } = req.body;
    const mentor = await Mentor.create({ name, email, expertise });
    res.status(201).json(mentor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
