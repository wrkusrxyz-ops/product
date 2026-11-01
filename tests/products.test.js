const request = require('supertest');
const { describe, it, expect } = require('vitest');
const app = require('../src/app');

describe('GET /api/products/:id', () => {
  it('returns a product when the product exists', async () => {
    const response = await request(app).get('/api/products/1');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      data: {
        id: 1,
        name: 'Wireless Mouse',
        price: 24.99,
        inStock: true
      }
    });
  });

  // TODO: Add a test for a valid product ID that does not exist (404).
  // TODO: Add a test for an invalid product ID (400).
});
