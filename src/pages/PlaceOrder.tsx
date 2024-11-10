import { useEffect } from "react";
import CandyCheckoutForm from "../components/checkout/CandyCheckoutForm"

function PlaceOrderPage () {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    return (
        <div className="candy-padding">
            <CandyCheckoutForm />
        </div>
    );
  }
  
  export default PlaceOrderPage;