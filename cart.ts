type Product = {
    name: string;
    price: number;
};

export class Cart {
    products: Product[] = [];

    addProduct(name: string, price: number): void {
        this.products.push({ name, price });
    }
}
