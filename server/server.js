const express = require('express');

const routes = require('./routes');
const sequelize = require('./config/connection.js');
const Contact = require('./models/Contact.js');
const contactRoutes = require('./routes/api/contactRoutes.js');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(routes);

app.post('/api/contacts', async (req, res) => {
  const { name, email, phone, message } = req.body;
  try {
    const newContact = await Contact.create({ name, email, phone, message });
    res.status(200).json(newContact);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connected...');
    return sequelize.sync({ force: true });
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
