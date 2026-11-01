import request from "supertest";
import { describe, it, expect } from "vitest";
import app from "../src/app";

describe("GET /api/products/:id", () => {
  it("returns a product when the product exists", async () => {
    const response = await request(app).get("/api/products/1");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      data: {
        id: 1,
        name: "Wireless Mouse",
        price: 24.99,
        inStock: true,
      },
    });
  });

  // TODO: Add a test for a valid product ID that does not exist (404).
  it("returns a 404 when the product does not exist", async () => {
    const response = await request(app).get("/api/products/999");

    expect(response.status).toBe(404);
    expect(response.body).toEqual({ error: "Product not found" });
  });
  // TODO: Add a test for an invalid product ID (400).
  it("returns 400 when the product ID is invalid", async () => {
    const response = await request(app).get("/api/products/abc");

    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      error: "Product ID must be a positive integer",
    });
  });
});
