const router = require('express').Router();
const Contact = require('../../models/Contact');

router.get('/', async (req, res) => {
  try {
    const contactData = await Contact.findAll();
    res.status(200).json(contactData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// submit contact form
router.post('/', async (req, res) => {
  try {
    const contactData = await Contact.create(req.body);
    res.status(200).json(contactData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
