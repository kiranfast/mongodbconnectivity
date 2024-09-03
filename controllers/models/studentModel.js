const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Student extends Model {}

Student.init({
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  major: DataTypes.STRING,
  mentorId: DataTypes.INTEGER
}, { sequelize, modelName: 'Student' });

module.exports = Student;
