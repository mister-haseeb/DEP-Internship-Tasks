const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Define your routes here
router.get('/', async (req, res) => {
  // Get all products
});

router.post('/', async (req, res) => {
  // Create a new product
});

module.exports = router;
