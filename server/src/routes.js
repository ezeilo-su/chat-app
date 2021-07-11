const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.send('App is up and running!');
});

module.exports = router;
