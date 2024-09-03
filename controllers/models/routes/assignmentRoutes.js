const express = require('express');
const router = express.Router();
const assignmentController = require('../controllers/assignmentController');

router.post('/assignments', assignmentController.assignStudentsToMentor);
router.put('/students/:studentId/mentor', assignmentController.assignOrChangeMentorForStudent);

module.exports = router;
