const express = require('express');
const { getProductById } = require('../controllers/products');
const router = express.Router();
router.get('/:id', getProductById);
module.exports = router;
