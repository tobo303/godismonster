import { useQuery } from "@tanstack/react-query";
import CandyClient from "../services/candyApiClient";

//#region Was a good idea, but it kinda failed...
// import { CandyCardProduct } from "../types/CandyProduct";
// import useCandyProducts from "./useCandyProducts";
// import { CandyResponse } from "../types/CandyResponses";

// function populateCandyCards() : CandyResponse<CandyCardProduct[]>
// {
// 	const { data: candies } = useCandyProducts();
// 	const candyCards: CandyCardProduct[] = [];
// 	let result : CandyResponse<CandyCardProduct[]> = { status: "success", data: [] };
// 	if (candies && candies.status === "success") {
// 		candies.data.forEach((candy) => {
// 			candyCards.push({
// 				id: candy.id,
// 				name: candy.name,
// 				images: candy.images,
// 				price: candy.price
// 			});
// 		});
// 	}
// 	result.data = candyCards;
// 	return result;
// }
//#endregion

const useCandyCardProducts = () => {
	return useQuery({
		queryKey: ["candy-card-products"],
		queryFn: CandyClient.getCardProducts,
	});
}

export default useCandyCardProducts;