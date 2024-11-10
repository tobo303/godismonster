import { Button, Offcanvas } from "react-bootstrap";
import useCandyShoppingCart from "../../hooks/useCandyShoppingCart";
import useCandyProducts from "../../hooks/useCandyProducts";
import { CandyProduct } from "../../types/CandyProduct";
import { Link } from "react-router-dom";
import { IMAGE_TRASH_CAN_URL } from "../../scripts/candyConfig";

// Followed instuctions from https://www.youtube.com/watch?v=lATafp15HWA&list=PLS5OxbiCyLzXcAUIa1cIC0Uu_bzq2MhaZ&index=37&ab_channel=WebDevSimplified
export function CandyShoppingCart() {

    const {isCartOpen, closeCart, getCartItems, deleteFromCart, clearCart, getCartTotalSum} = useCandyShoppingCart();
    const {data: products} = useCandyProducts();
    if (!products || products.status !== "success") {
        return null;
    }

    function getProductFromId(productId: number) : CandyProduct | undefined {
        if (products && products?.status === "success") {
            return products.data?.find(product => product.id === productId) || undefined;
        }
    }

    const cartItems = getCartItems().map(item => {
        return getProductFromId(item.productId);
    });

    if (!cartItems) {
        return null;
    }

    return (
        <Offcanvas show={isCartOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Godiskorg</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <p>Ditt snask:</p>
                {getCartItems().map(item => (
                    item &&
                    <div key={item.productId} className="cart-item">
                        <div className="d-flex justify-content-evenly align-content-left">
                            <span className="flex-grow-1">{getProductFromId(item.productId)?.name}</span>
                            <span className="me-1">{item.quantity} st</span>
                            <span className="me-1"> <strong>x</strong> </span>
                            <span className="me-1">{getProductFromId(item.productId)?.price} kr</span>
                            <button className="cardyCard" onClick={() => deleteFromCart(item.productId)}><img width={16} height={16} src={IMAGE_TRASH_CAN_URL}></img></button>
                        </div>
                    </div>
                ))}
                <div className="d-flex justify-content-center align-items-end">
                    Summa: {getCartTotalSum()} kr
                </div>
                <div className="d-flex justify-content-center align-items-end flex-row flex-fill">
                    <Link className="btn btn-primary me-3" to={"/bestall"} onClick={closeCart}>Till kassan</Link>
                    <Button onClick={() => {clearCart(); closeCart();}}>Rensa varukorg</Button>
                </div>

            </Offcanvas.Body>
        </Offcanvas>
    );
}