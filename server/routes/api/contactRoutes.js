const router = require('express').Router();
const Contact = require('../../models/Contact');
const sendEmail = require('../../mailer');

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

    // send email notification
    await sendEmail(
      process.env.EMAIL_USER,
      `New Contact Form Submission`,
      `Hello,\n\n${contactData.message}\n\nThank You,\n\n${contactData.name}\n${contactData.email}\n${contactData.phone}`
    );

    res.status(200).json(contactData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
