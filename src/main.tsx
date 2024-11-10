//#region  dependencies
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { makeHours, makeMinutes } from './scripts/makeTime';
//#endregion

//#region Candy imports
import CandyApp from './CandyApp';
import CandyProductsProvider from './providers/CandyProductsProvider';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import CandyProductCardsProvider from './providers/CandyProductCardsProvider';
//#endregion

import 'bootstrap/dist/css/bootstrap.min.css';
import "./sass/styles.scss";
import CandyShoppingCartProvider from './providers/CandyShoppingCartProvider';

//#region TanStack Query
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			staleTime: makeMinutes(30),
			gcTime: makeHours(1),
		}
	}
});
//#endregion

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <CandyProductsProvider>
          <CandyProductCardsProvider>
            <CandyShoppingCartProvider>
              <CandyApp />
            </CandyShoppingCartProvider>
          </CandyProductCardsProvider>
        </CandyProductsProvider>
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </StrictMode>,
)
