/**
 * Représente un produit dans le panier
 */
type Product = {
    name: string;
    price: number;
};

/**
 * Classe Cart - Gestion d'un panier d'achat avec remise automatique
 * 
 * Fonctionnalités :
 * - Ajout de produits
 * - Calcul du total avec remise de 10% si > 100€
 */
export class Cart {
    // Constantes pour la logique métier
    private static readonly DISCOUNT_THRESHOLD = 100;
    private static readonly DISCOUNT_RATE = 0.10;

    products: Product[] = [];

    /**
     * Ajoute un produit au panier
     * @param name - Nom du produit
     * @param price - Prix du produit (doit être positif)
     * @throws Error si le prix est négatif
     */
    addProduct(name: string, price: number): void {
        if (price < 0) {
            throw new Error("Le prix ne peut pas être négatif");
        }
        if (!name || name.trim() === "") {
            throw new Error("Le nom du produit ne peut pas être vide");
        }
        this.products.push({ name: name.trim(), price });
    }

    /**
     * Calcule le total du panier avec remise éventuelle
     * Applique une remise de 10% si le total dépasse 100€
     * @returns Le montant total (avec remise si applicable)
     */
    getTotal(): number {
        const subtotal = this.products.reduce((sum, p) => sum + p.price, 0);
        
        if (subtotal > Cart.DISCOUNT_THRESHOLD) {
            return subtotal * (1 - Cart.DISCOUNT_RATE);
        }
        
        return subtotal;
    }

    /**
     * Vide le panier
     */
    clear(): void {
        this.products = [];
    }

    /**
     * Retourne le nombre de produits dans le panier
     */
    getItemCount(): number {
        return this.products.length;
    }
}

