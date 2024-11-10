import React, { useEffect, useState } from "react";
import { CandyProductsContext } from "../context/CandyProductsContext";
import { CandyProduct } from "../types/CandyProduct";
import useCandyProducts from "../hooks/useCandyProducts";

type CandyProductsProviderProps = {
    children: React.ReactNode;
};

const CandyProductsProvider : React.FC<CandyProductsProviderProps> = ({ children }) => {

    
    const [products, setProducts] = useState<CandyProduct[]>([]);
    const {data: candies, isLoading} = useCandyProducts();
   
    useEffect(() => {
        switch (candies?.status) {
            case "success":
                setProducts(candies.data);
            break;
        }
    }, [isLoading, candies]);


    function getProductsCount() {
        return products?.length || 0;
    }

    function getProducts() {
        return products || [];
    }

    return (
        <CandyProductsContext.Provider value={{ getProductsCount, getProducts, isLoading }}>
            {children}
        </CandyProductsContext.Provider>
    );
}

export default CandyProductsProvider;