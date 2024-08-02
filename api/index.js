const cors = require('cors');
const express = require('express');
const path = require('path');

const routes = require('./routes/index.js');
const sequelize = require('./config/connection.js');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(
  cors({
    origin: 'https://nahidahmed.com',
    methods: ['POST'],
    allowedHeaders: ['Content-Type'],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
// app.use(routes);
app.get('/', (req, res) => res.send('Express on Vercel'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
}

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connected...');
    return sequelize.sync({ force: false, alter: true });
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://${process.env.DB_HOST}:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = app;
