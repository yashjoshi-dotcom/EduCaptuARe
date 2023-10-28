const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send('The API base endpint is working correctly');
});

module.exports = router;