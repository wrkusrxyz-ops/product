const productService = require('../services/productService');

async function getProductById(req, res) {
  const productId = Number(req.params.id);
  if (!Number.isInteger(productId) || productId <= 0) {
    return res.status(400).json({ error: 'Product ID must be a positive integer' });
  }
  const product = await productService.findById(productId);
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  return res.status(200).json({ data: product });
}

module.exports = { getProductById };
