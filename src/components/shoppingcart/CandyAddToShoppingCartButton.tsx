import { Button } from "react-bootstrap";
import { IMAGE_CART_ADD_ICON_URL } from "../../scripts/candyConfig";
import { useCandyShoppingCartContext } from "../../context/CandyShoppingCartContext";
import PropTypes from 'prop-types';

interface CandyAddToShoppingCartButtonProps {
	productId: number;
}

const CandyAddToShoppingCartButton: React.FC<CandyAddToShoppingCartButtonProps> = ({productId}) => {

     const {addToCart} = useCandyShoppingCartContext();

    return (
        <div>
            <Button className='candy-cart'>
                <img width={24} height={24} src={IMAGE_CART_ADD_ICON_URL} onClick={() => addToCart(productId)} alt="Lägg i kundvagnen" />
            </Button>
        </div>
    );
}

CandyAddToShoppingCartButton.propTypes = {
    productId: PropTypes.number.isRequired
};
  

export default CandyAddToShoppingCartButton;