import { Button } from "react-bootstrap";
import { IMAGE_CART_ADD_ICON_URL } from "../../scripts/candyConfig";
import { useCandyShoppingCartContext } from "../../context/CandyShoppingCartContext";
import { useEffect } from "react";

function CandyShoppingCartButton() {
    const {openCart, cartItemCount} = useCandyShoppingCartContext();

    useEffect(() => {
        
    }, [cartItemCount]);
    

    return (
        <div>
            <Button variant="outline-info" className='shopping-cart me-4' onClick={() => openCart()}>
                <div className="shopping-cart-content">
                    <div className="shopping-cart-text">{cartItemCount}</div>
                    <div><img src={IMAGE_CART_ADD_ICON_URL} width={32} height={32} /></div>
                </div>
            </Button>
        </div>
    );
}

export default CandyShoppingCartButton;