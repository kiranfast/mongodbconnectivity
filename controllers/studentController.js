const Student = require('../models/studentModel');

exports.createStudent = async (req, res) => {
  try {
    const { name, email, major } = req.body;
    const student = await Student.create({ name, email, major });
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
