const express = require('express');
const router = express.Router();
const Item = '../models/Items.js';

// Get all items
router.get('/', async (req, res) => {
  const items = await Item.find();
  res.render('index', { items });
});

module.exports = router;