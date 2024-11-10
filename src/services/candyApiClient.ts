import axios from 'axios';

//#region Candy related imports
import {CANDYSHOP_BASE_URL, CANDYSHOP_PRODUCTS_URL, CANDYSHOP_DEFAULT_TIMEOUT, CANDYSHOP_ORDER_POST_URL} from '../scripts/candyConfig';
import { CandyResponse } from '../types/CandyResponses';
import { CandyProduct, CandyCardProduct, CandyProductDetails } from '../types/CandyProduct';
import { CandyPlaceOrder } from '../types/CandyPlaceOrderItem';
//#endregion

// Class to help with API calls to the Candy Shop
// Taken from HackerNews homework and improved upon.

// Made property 'client' (instance) static to avoid creating multiple instances of the class and also it didn't work
// with TanStack/React queries. My guess is that the class was not created when requested by the query or accessed wrongfully from another thread.

class CandyApiClient {

    private static readonly client = axios.create({
        baseURL: CANDYSHOP_BASE_URL,
        timeout: CANDYSHOP_DEFAULT_TIMEOUT,
        headers: {
            "Content-Type": "application/json",
        }});
        
    private static async getFromApi<T>(endpoint: string) {
        const response = await CandyApiClient.client.get<CandyResponse<T>>(endpoint);

        switch (response.data.status) {
            case "success":
                return response.data;
            case "fail":
                return response.data;
            default:
                return response.data;
        }
    }

    private static async postToApi<T>(endpoint: string, candyOrder: CandyPlaceOrder) {
        const response = await CandyApiClient.client.post<CandyResponse<T>>(endpoint, candyOrder);

        switch (response.data.status) {
            case "success":
                return response.data;
            case "fail":
                return response.data;
            default:
                return response.data;
        }
    }

    public async getProducts() {
        console.log('Fetching products...');
        return await CandyApiClient.getFromApi<CandyProduct[]>(CANDYSHOP_PRODUCTS_URL);
    }

    public async getCardProducts() {
        console.log('Fetching card products...');
        const result = await CandyApiClient.getFromApi<CandyCardProduct[]>(CANDYSHOP_PRODUCTS_URL);
        return result;
    }

    public async getProductById(id: number) {
        return CandyApiClient.getFromApi<CandyProductDetails>(`${CANDYSHOP_PRODUCTS_URL}/${id}`);
    }

    public async postCandyOrder<T>(candyOrder: CandyPlaceOrder) {
        console.log('Posting order...');
        return await CandyApiClient.postToApi<T>(CANDYSHOP_ORDER_POST_URL, candyOrder);
    }
}

const CandyClient = new CandyApiClient();

export default CandyClient;
