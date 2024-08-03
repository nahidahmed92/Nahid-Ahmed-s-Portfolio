const cors = require('cors');
const express = require('express');
const path = require('path');

const routes = require('./routes');
const sequelize = require('./config/connection.js');

const app = express();
const PORT = process.env.PORT || 3001;

const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST'],
  // allowedHeaders: ['Content-Type'],
  credentials: true,
};

// Middleware
// app.options('', corsOptions);
// app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(routes);
app.use('/', (req, res) => {
  res.send('server running');
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));

  // app.get('*', (req, res) => {
  //   res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  // });
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
