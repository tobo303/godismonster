import { createContext, useContext } from 'react';
import { CandyShoppingCartContextType } from '../types/contexts/CandyShoppingCartContextType';

export const CandyShoppingCartContext = createContext<CandyShoppingCartContextType>({} as CandyShoppingCartContextType);

export function useCandyShoppingCartContext() {
    return useContext(CandyShoppingCartContext);
};

