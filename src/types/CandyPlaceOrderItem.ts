// {
// 	"customer_first_name": "Johan",
// 	"customer_last_name": "Nordström",
// 	"customer_address": "Drottninggatan 4B",
// 	"customer_postcode": "224 79",
// 	"customer_city": "Malmö",
// 	"customer_email": "jn@thehiveresistance.com",
// 	"customer_phone": "1-800-IWANTCANDY",
// 	"order_total": 44,
// 	"order_items": [
// 		{
// 			"product_id": 6545,
// 			"qty": 2,
// 			"item_price": 8,
// 			"item_total": 16
// 		},
// 		{
// 			"product_id": 6653,
// 			"qty": 4,
// 			"item_price": 7,
// 			"item_total": 28
// 		}
// 	]
// }

export interface CandyPlaceOrder {
    customer_first_name: string;
    customer_last_name: string;
    customer_address: string;
    customer_postcode: string;
    customer_city: string;
    customer_email: string;
    customer_phone: string;
    order_total: number;
    order_items: CandyPlaceOrderItem[];
}

export interface CandyPlaceOrderItem {
    product_id: number;
    qty: number;
    item_price: number;
    item_total: number;
}