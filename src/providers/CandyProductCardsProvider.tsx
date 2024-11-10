import React, { useEffect, useState } from "react";
import { CandyProductCardContext } from "../context/CandyProductCardContext";
import { CandyCardProduct } from "../types/CandyProduct";
import useCandyCardProducts from "../hooks/useCandyCardProduct";

type CandyProductCardsProviderProps = {
    children: React.ReactNode;
};

const CandyProductCardsProvider : React.FC<CandyProductCardsProviderProps> = ({ children }) => {

    
    const [products, setProducts] = useState<CandyCardProduct[]>([]);
    const {data: candies, isLoading} = useCandyCardProducts();
   
    useEffect(() => {
        switch (candies?.status) {
            case "success":
                setProducts(candies.data);
            break;
        }
    }, [isLoading, candies]);


    function getProductCardsCount() {
        return products?.length || 0;
    }

    function getProductCards() {
        return products || [];
    }

    return (
        <CandyProductCardContext.Provider value={{ getProductCards, getProductCardsCount, isLoading }}>
            {children}
        </CandyProductCardContext.Provider>
    );
}

export default CandyProductCardsProvider;