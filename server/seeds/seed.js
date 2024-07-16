const sequelize = require('../config/connection.js');
const Contact = require('../models/Contact.js');

const contactData = require('./contactData.json');

const seedDB = async () => {
  await sequelize.sync({ force: true });

  const contacts = await Contact.bulkCreate(contactData);

  process.exit(0);
};

seedDB();
