//#region react depedencies
import React, { useState } from "react";
//#endregion

//#region Candy dependencies
import { CandyShoppingCartContext } from "../context/CandyShoppingCartContext";
import CandyShoppingCartItem from "../types/CandyShoppingCartItem";
import useCandyProducts from "../hooks/useCandyProducts";
import { CandyShoppingCart } from "../components/shoppingcart/CandyShoppingCart";
import CandyStorage from "../storage/CandyStorage";
//#endregion

type CandyShoppingCartProviderProps = {
    children: React.ReactNode;
};

const candyStorage = new CandyStorage();

const CandyShoppingCartProvider : React.FC<CandyShoppingCartProviderProps> = ({ children }) => {
    const {data: products} = useCandyProducts();

    const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
    const [cartItemCount, setCartItemCount] = useState<number>(candyStorage.getTotalQuantity());

    function addToCart(productId: number) {
        console.log("Adding product to cart: ", productId);

        const item = candyStorage.getItems().find((item) => item.productId === productId)
        if (item) {
            item.quantity += 1;
            candyStorage.setQuantity(productId, item.quantity);
            setCartItemCount(cartItemCount + 1);
            return;
        }

        const newItem: CandyShoppingCartItem = {
            productId,
            quantity: 1
        };

        console.log("Adding new item to cart: ", newItem);
        candyStorage.addItem(newItem);
        setCartItemCount(cartItemCount + 1);
    }

    function deleteFromCart(productId: number) {
        console.log("Deleting product from cart: ", productId);

        candyStorage.deleteItem(productId);
        setCartItemCount(candyStorage.getTotalQuantity());
    }

    function removeFromCart(productId: number) {
        console.log("Removing product from cart: ", productId);

        const item = candyStorage.getItems().find((item) => item.productId === productId)

        if (!item) {
            return;
        }

        if (item.quantity === 1) {
            candyStorage.deleteItem(productId);
            setCartItemCount(cartItemCount - 1);
            return;
        }

        candyStorage.setQuantity(item.productId, item.quantity -= 1);
        setCartItemCount(cartItemCount - 1);
    }

    function getCartItems() {
        console.log("Getting cart items...");
        return candyStorage.getItems() || [];
    }

    function getCartItemsCount() {
        console.log("Getting cart items count...");
        const count = candyStorage.getTotalQuantity();
        console.log("Cart items count: ", count);

        return count;
    }

    function getCartTotalSum() : number {
        console.log("Getting cart total sum...");
        if (!products || products?.status !== "success" || !products.data) {
            return 0;
        }

        let totalSum = 0;
        candyStorage.getItems().forEach((item) => {
            const product = products.data.find((product) => product.id === item.productId)
            if (product) {
                totalSum += product.price * item.quantity;
            };
        });

        return totalSum;
    }

    function clearCart() {
        console.log("Clearing cart");
        candyStorage.clear();
        setCartItemCount(0);
    }

    function closeCart() {
        console.log("Closing cart");
        setIsCartOpen(false);
    }

    function openCart() {
        console.log("Opening cart");
        setIsCartOpen(true);
    }

    return (
        <CandyShoppingCartContext.Provider value={{ 
                getCartItems,
                getCartTotalSum,
                getCartItemsCount,
                addToCart,
                removeFromCart,
                clearCart,
                closeCart,
                openCart,
                isCartOpen,
                cartItemCount,
                deleteFromCart
            }}>
            {children}
            <CandyShoppingCart />
        </CandyShoppingCartContext.Provider>
    );
}

export default CandyShoppingCartProvider;