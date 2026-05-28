const express = require('express');
const router = express.Router();

router.post('/send', (req, res) => {
  const { firstName, lastName, email, service, message } = req.body;

  // Basic validation
  if (!firstName || !email || !message) {
    return res.status(400).json({ success: false, error: 'Missing required fields.' });
  }

  // Here you would normally send an email or store to DB
  // For now, we log and return success
  console.log('📧 New contact form submission:');
  console.log({ firstName, lastName, email, service, message });

  res.json({ success: true, message: 'Message received! I will get back to you soon.' });
});

module.exports = router;
