import CandyShoppingCartItem from "../CandyShoppingCartItem";

export type CandyShoppingCartContextType = {
    getCartItems: () => CandyShoppingCartItem[];
    getCartTotalSum: () => number;
    getCartItemsCount: () => number;
    addToCart: (productId: number) => void;
    removeFromCart: (productId: number) => void;
    clearCart: () => void;
    closeCart: () => void;
    openCart: () => void;
    isCartOpen: boolean;
    cartItemCount: number;
    deleteFromCart: (productId: number) => void;
};
