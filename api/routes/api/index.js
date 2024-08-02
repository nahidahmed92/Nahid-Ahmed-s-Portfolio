const router = require('express').Router();
const contactRoutes = require('./contactRoutes.js');

router.use('/contacts', contactRoutes);

module.exports = router;
