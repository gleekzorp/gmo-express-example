const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'home.html'));
})

router.get('/survey', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'survey.html'));
})

module.exports = router;