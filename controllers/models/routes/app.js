const express = require('express');
const app = express();
const mentorRoutes = require('./routes/mentorRoutes');
const studentRoutes = require('./routes/studentRoutes');
const assignmentRoutes = require('./routes/assignmentRoutes');

app.use(express.json());
app.use('/api/mentors', mentorRoutes);
app.use('/api/students', studentRoutes);
app.use('/api', assignmentRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
