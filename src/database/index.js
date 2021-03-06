const Sequelize = require('sequelize');
const config = require('./config');

// connect to cloud db
const sequelize = new Sequelize(config.DB_URI);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
