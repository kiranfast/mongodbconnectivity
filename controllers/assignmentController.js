const Mentor = require('../models/mentorModel');
const Student = require('../models/studentModel');

exports.assignStudentsToMentor = async (req, res) => {
  try {
    const { mentorId, studentIds } = req.body;
    const mentor = await Mentor.findById(mentorId);
    if (!mentor) return res.status(404).json({ error: 'Mentor not found' });

    // Assuming an assignment model exists to track mentor-student relationships
    await Promise.all(studentIds.map(id => Student.update({ mentorId: mentorId }, { where: { id } })));

    res.status(200).json({ mentorId, studentsAssigned: studentIds });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.assignOrChangeMentorForStudent = async (req, res) => {
  try {
    const { studentId } = req.params;
    const { mentorId } = req.body;

    const student = await Student.findById(studentId);
    if (!student) return res.status(404).json({ error: 'Student not found' });

    await Student.update({ mentorId }, { where: { id: studentId } });
    res.status(200).json({ studentId, newMentorId: mentorId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
