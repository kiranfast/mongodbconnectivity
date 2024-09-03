const express = require('express');
const router = express.Router();
const mentorController = require('../controllers/mentorController');

router.post('/', mentorController.createMentor);

module.exports = router;
