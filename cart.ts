type Product = {
    name: string;
    price: number;
};

export class Cart {
    products: Product[] = [];

    addProduct(name: string, price: number): void {
        this.products.push({ name, price });
    }

    getTotal(): number {
        let total = this.products.reduce((sum, p) => sum + p.price, 0);
        if (total > 100) {
            total *= 0.9; // -10%
        }
        return total;
    }
}

