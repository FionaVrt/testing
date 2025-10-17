interface Product {
    name: string;
    price: number;
}

export class Cart {
    products: Product[];

    constructor() {
        this.products = [];
    }

    addProduct(name: string, price: number): void {
        this.products.push({ name, price });
    }

    getTotal(): number {
        return this.products.reduce((total, product) => total + product.price, 0);
    }
}
