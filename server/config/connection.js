const Sequelize = require('sequelize');
require('dotenv').config();

// Verify environment variables
console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_URL:', process.env.DB_URL);

let sequelize;

if (process.env.DB_URL) {
  sequelize = new Sequelize(process.env.DB_URL, {
    dialectModule: require('pg'),
  });
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: process.env.DB_PORT,
  });
}

module.exports = sequelize;
