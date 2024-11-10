import { useQuery } from "@tanstack/react-query";
import CandyClient from "../services/candyApiClient";

const useCandyProducts = () => {
	return useQuery({
		queryKey: ["candy-products"],
		queryFn: CandyClient.getProducts,
	});
}

export default useCandyProducts;