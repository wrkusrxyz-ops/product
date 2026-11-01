const products = [
  { id: 1, name: 'Wireless Mouse', price: 24.99, inStock: true },
  { id: 2, name: 'USB-C Hub', price: 39.5, inStock: false },
  { id: 3, name: 'Laptop Stand', price: 31, inStock: true }
];

async function findById(id) {
  return products.find((product) => product.id === id) || null;
}

module.exports = { findById };
