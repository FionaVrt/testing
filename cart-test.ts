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
}
