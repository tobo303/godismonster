//#region  dependencies
import { Routes, Route } from "react-router-dom";
//#endregion

//#region components/pages
import HomePage from "./pages/HomePage.tsx";
import CandyNavbar from "./components/navbar/CandyNavbar.tsx";
import CandyPage from "./pages/CandyPage.tsx";
import NotFound from "./pages/NotFound.tsx";
import CandyOverviewPage from "./pages/CandyOverviewPage.tsx";
import PlaceOrderPage from "./pages/PlaceOrder.tsx";
//#endregion

const CandyApp = () => {
  return (
    <div id="App">
		<CandyNavbar />
      	<Routes>
        	<Route path="/" element={<HomePage />} />
        	<Route path="/produkter" element={<CandyPage />} />
        	<Route path="/produkter/:id" element={<CandyOverviewPage />} />
        	<Route path="/bestall" element={<PlaceOrderPage />} />
        	<Route path="*" element={<NotFound />} />
      	</Routes>
	</div>
	);
};

export default CandyApp;
