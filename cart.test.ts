import { describe, test, expect } from "@jest/globals";
import { Cart } from "./cart-test";

describe("Cart", () => {
    test("should add a product to the cart", () => {
        const cart = new Cart();
        cart.addProduct("Banane", 2);

        expect(cart.products.length).toBe(1);
        expect(cart.products[0]).toEqual({ name: "Banane", price: 2 });
    });
});
