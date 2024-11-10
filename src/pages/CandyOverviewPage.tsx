//#region react depedencies
import Warning from "../components/alerts/Warning";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
//#endregion

//#region Candy imports
import { HEADER_WARNING } from "../scripts/candyConfig";
import CandyCard from "../components/CandyCard";
import CandyLoadingSpinner from "../components/spinners/CandyLoadingSpinner";
import CandyClient from "../services/candyApiClient";
import { CandyProductDetails } from "../types/CandyProduct";
//#endregion

function CandyOverviewPage() {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [isError, setIsError] = useState<boolean>(false);
	const [candy, setCandy] = useState<CandyProductDetails | null>(null);
	const { id } = useParams<{ id: string }>();

	const navigate = useNavigate();

	const productId = Number(id);

	const getProductById = async (prodId: number): Promise<CandyProductDetails | null> => {
		try {
			const result = await CandyClient.getProductById(prodId);
			if (result.status === "success") {
				setIsError(false);
				setIsLoading(false);
				return result.data;
			} else {
				setIsError(true);
				setIsLoading(false);
				return null;
			}
		} catch (error) {
			console.error(error);
			
			setIsError(true);
			setIsLoading(false);
			return null;
		}
	};

	useEffect(() => {
		const fetchProduct = async () => {
			const product = await getProductById(productId);
			setCandy(product);
		};

		fetchProduct();
	}, [productId]);

	return (
		<>
			<div className="candy-padding">
				<Button onClick={() => navigate(-1)}>Tillbaka</Button>
				{isError && !candy && (
					<Warning heading={HEADER_WARNING}>
						Där fick vi så vi fes för att nånting gick fel! Inte ens grumpy cat kan hjälpa oss nu. 😭
					</Warning>)}
				{isError && candy && <Warning>Nått gick fel vid hämtning utav produkten eller så existerar den inte.</Warning>}
				{isLoading && <CandyLoadingSpinner />}

				{candy && 
				<>
					<div className="d-flex p-2 bd-highlight flex-wrap justify-content-center">
						<CandyCard key={candy.id} candy={candy} />
						<Card>
							<Card.Body>
								<div className="d-flex flex-wrap justify-content-center">
									{
										candy.tags.map(tag => (
											<div key={tag.id} className="m-1">
												<Button variant="outline-primary" disabled>{tag.name}</Button>
											</div>))
									}
									{
										<div className="d-flex">
											LAGERSALDO: {candy.stock_quantity}
										</div>
									}
								</div>
							</Card.Body>
							<Card.Footer>
								{
								// https://stackoverflow.com/questions/47483964/how-to-render-a-html-string-in-react
								// Easier/safer than using dangerouslySetInnerHTML
								candy.description.replace(/<[^>]+>/g," ").split("\n").map((line, index) => (
									<p key={index}>{line}</p>
								))}
							</Card.Footer>
						</Card>
					</div>
				</>}
			</div>
		</>
	);
}

export default CandyOverviewPage;
