const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Mentor extends Model {}

Mentor.init({
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  expertise: DataTypes.STRING
}, { sequelize, modelName: 'Mentor' });

module.exports = Mentor;
