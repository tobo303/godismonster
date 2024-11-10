import { useContext } from "react";
import { CandyShoppingCartContext } from "../context/CandyShoppingCartContext";

const useCandyShoppingCart = () => {
	return useContext(CandyShoppingCartContext);
}

export default useCandyShoppingCart;