import { createContext, useContext } from 'react';
import { CandyProductCardContextType } from '../types/contexts/CandyProductCardContextType';

export const CandyProductCardContext = createContext<CandyProductCardContextType | null>(null);

export function useCandyProductCardContext() {
    return useContext(CandyProductCardContext);
};

