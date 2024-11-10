//#region react depedencies
import Warning from "../components/alerts/Warning";
//#endregion

//#region Candy imports
import useCandyCardProducts from "../hooks/useCandyCardProduct";
import {HEADER_WARNING} from "../scripts/candyConfig";
import CandyCard from "../components/CandyCard";
import CandyLoadingSpinner from "../components/spinners/CandyLoadingSpinner";
//#endregion

function CandyPage() {
  const { data: candies, isError, isLoading } = useCandyCardProducts();
    
  return (
		<>
			<div className="candy-padding">
				{isError && candies?.status === "error" && <Warning>{candies.message}</Warning>}
				{isError && <Warning heading={HEADER_WARNING}>Där fick vi så vi fes för att nånting gick fel! Inte ens en burgercat kan hjälpa oss nu.</Warning>}
				{isLoading && <CandyLoadingSpinner />}

				{candies && candies.status === "success" && candies.data.length > 0 && (
				<>
					<div className="d-flex p-2 bd-highlight flex-wrap justify-content-center">
						{candies.data.map(candy => (
							<CandyCard 
								key={candy.id}
								candy={candy} /> ))}
					</div>
				</>)}

				{candies && candies.status === "success" && candies.data.length === 0 && (
					<Warning heading="Här var det tomt">Kunde inte hitta några snaskiga produkter 😭</Warning>)}
			</div>
		</>
	)
}
  
export default CandyPage;