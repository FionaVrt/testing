import { describe, test, expect } from "@jest/globals";
import { Cart } from "./cart";

describe("Cart", () => {
    test("should add a product to the cart", () => {
        const cart = new Cart();
        cart.addProduct("Banane", 2);
        expect(cart.products.length).toBe(1);
        expect(cart.products[0]).toEqual({ name: "Banane", price: 2 });
    });

    test("should calculate total without discount", () => {
        const cart = new Cart();
        cart.addProduct("Pomme", 3);
        cart.addProduct("Orange", 2);
        expect(cart.getTotal()).toBe(5);
    });

    test("should apply 10% discount if total exceeds 100€", () => {
        const cart = new Cart();
        cart.addProduct("PC", 120);
        expect(cart.getTotal()).toBe(108);
    });

    test("should not apply discount if total ≤ 100€", () => {
        const cart = new Cart();
        cart.addProduct("Casque", 60);
        cart.addProduct("Souris", 40);
        expect(cart.getTotal()).toBe(100);
    });
});
