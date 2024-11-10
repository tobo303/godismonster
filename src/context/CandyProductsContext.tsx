import { createContext, useContext } from 'react';
import { CandyProductsContextType } from '../types/contexts/CandyProductsContextType';

export const CandyProductsContext = createContext<CandyProductsContextType | null>(null);

export function useCandyProductsContext() {
    return useContext(CandyProductsContext);
};

