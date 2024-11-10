import { CandyCardProduct } from "../CandyProduct";

export type CandyProductCardContextType = {
    getProductCardsCount: () => number;
    getProductCards: () => CandyCardProduct[];
    isLoading: boolean;
};
