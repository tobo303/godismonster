import { CandyProduct } from "../CandyProduct";

export type CandyProductsContextType = {
    getProductsCount: () => number;
    getProducts: () => CandyProduct[];
    isLoading: boolean;
};
