const express = require('express');
const router = express.Router();
const Item = '../models/Items.js';

// Get all items
router.get('/', async (req, res) => {
  const items = await Item.find();
  res.render('index', { items });
});

// Create new item
router.post('/items', async (req, res) => {
  await Item.create({ name: req.body.name });
  res.redirect('/');
});

// Show edit form
router.get('/items/edit/:id', async (req, res) => {
  const item = await Item.findById(req.params.id);
  res.render('edit', { item });
});

// Update item
router.put('/items/:id', async (req, res) => {
  await Item.findByIdAndUpdate(req.params.id, { name: req.body.name });
  res.redirect('/');
});



module.exports = router;