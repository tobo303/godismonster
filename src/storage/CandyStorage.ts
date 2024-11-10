import CandyShoppingCartItem from "../types/CandyShoppingCartItem";

class CandyStorage {
    private readonly storageKey: string = 'candyShoppingCart';

    public getItems(): CandyShoppingCartItem[] {
        const items = localStorage.getItem(this.storageKey);
        return items ? JSON.parse(items) : [];
    }

    public addItem(item: CandyShoppingCartItem): void {
        const items = this.getItems();
        items.push(item);
        localStorage.setItem(this.storageKey, JSON.stringify(items));
    }

    public deleteItem(productId: number): void {
        const items = this.getItems();
        localStorage.setItem(this.storageKey, JSON.stringify(items.filter(item => item.productId !== productId)));
        console.log("Deleted item from cart: ", productId);
    }

    public removeItem(itemId: number): void {
        const items = this.getItems();
        localStorage.setItem(this.storageKey, JSON.stringify(items.filter(item => item.productId !== itemId)));
    }

    public setQuantity(productId: number, quantity: number) {
        const items = this.getItems();
        const item = items.find(item => item.productId === productId);
        if (item) {
            item.quantity = quantity;
            localStorage.setItem(this.storageKey, JSON.stringify(items));
        }
    }

    public clear(): void {
        localStorage.removeItem(this.storageKey);
    }

    public getTotalQuantity(): number {
        return this.getItems().reduce((total, item) => total + item.quantity, 0);
    }
}

export default CandyStorage;