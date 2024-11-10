import { Button, Card, Form } from "react-bootstrap";

//#region Candy imports
import CandyCheckoutFormItemType from "./CandyCheckoutFormItemType";
import CandyCheckoutFormGroup from "./CandyCheckoutFormGroup";
import { FormEvent, useState } from "react";
import useCandyShoppingCart from "../../hooks/useCandyShoppingCart";
import currencyFormatter from "../../scripts/currencyFormatter";
import CandyClient from "../../services/candyApiClient";
import { formFieldData } from "./data/defaultFormValues";
import { CandyPlaceOrder, CandyPlaceOrderItem } from "../../types/CandyPlaceOrderItem";
import useCandyProducts from "../../hooks/useCandyProducts";
import { CandyProduct } from "../../types/CandyProduct";
import CandyPostOrder from "../../types/CandyPostOrder";
//#endregion


export function CandyCheckoutForm () {

    const {getCartItemsCount, getCartTotalSum, getCartItems, clearCart, isCartOpen, closeCart} = useCandyShoppingCart();
    const [formFields] = useState<CandyCheckoutFormItemType[]>(formFieldData)
    const [validated, setValidated] = useState(false);
    const {data: products} = useCandyProducts();
    
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const [customErrorMessage, setCustomErrorMessage] = useState("");

    async function placeOrder(orderData: CandyPlaceOrder) {
        try {

            const orderResult = await CandyClient.postCandyOrder<CandyPostOrder>(orderData);
            if (orderResult.status !== "success") {
                setIsError(true);
                console.log("Error:", orderResult);
                if (orderResult.status === "fail") {
                    let errorMessages = "";
                    for (const key in orderResult.data) {
                        if (orderResult.data.hasOwnProperty(key)) {
                            errorMessages += `${key}: ${orderResult.data[key]}\n`;
                        }
                    }

                    setCustomErrorMessage(errorMessages);
                    return;
                }
            }

            setIsSuccess(true);
            clearCart();
            
            if (isCartOpen)
                closeCart();

        } catch {
            
            setIsError(true);
        }
    }


    function getValueByName(name: string) : string {
        const field = formFields.find(field => field.name === name);
        return field ? field.value : '';
    }
    
    function getProductById(id: number) : CandyProduct | undefined {
        if (products?.status !== "success") return undefined;
        return products.data.find(product => product.id === id);
    }

    function onOrderSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }

        setValidated(true);

        const orderItems: CandyPlaceOrderItem[] = [];
        const cartItems = getCartItems();
        cartItems.forEach(item => {
            const orderItem = {} as CandyPlaceOrderItem;
            const product = getProductById(item.productId);
            orderItem.product_id = item.productId;
            orderItem.qty = item.quantity;
            orderItem.item_price = product?.price || 0;
            orderItem.item_total = (product?.price || 0) * item.quantity;
            orderItems.push(orderItem);
        });

        const orderData = {} as CandyPlaceOrder;
        orderData.customer_address = getValueByName("customer_address");
        orderData.customer_email = getValueByName("customer_email");
        orderData.customer_first_name = getValueByName("customer_first_name");
        orderData.customer_last_name = getValueByName("customer_last_name");
        orderData.customer_phone = getValueByName("customer_phone");
        orderData.customer_postcode = getValueByName("customer_postcode");
        orderData.customer_city = getValueByName("customer_city");

        orderData.order_items = orderItems;
        orderData.order_total = getCartTotalSum();

        placeOrder(orderData);
    }

    return (
        <>
        {isError && !isSuccess && <div className="alert alert-danger" role="alert">
            Ett fel inträffade vid beställningen. Försök igen senare.
            {customErrorMessage && <div>{customErrorMessage}</div>}
        </div>}

        {!isError && isSuccess && <div className="candy-padding alert alert-success" role="alert">
            Tack för din beställning! Din order har mottagits.
        </div>}

        {!isError && !isSuccess && <div>
            <div className="d-flex justify-content-center">
                <Card style={{width: '65%'}}>
                    <Card.Header>Fyll i dina uppgifter</Card.Header>
                    <Card.Body>
                        <Form noValidate validated={validated} id='candy-form' onSubmit={onOrderSubmit}>
                            {formFields.map((field, index) => (
                                <CandyCheckoutFormGroup key={index} formGrp={field} />
                            ))}
                        </Form>
                    </Card.Body>
                    <Card.Footer>
                        <div className="border" style={{width: '30%'}}>
                            Ordersumma: {currencyFormatter(getCartTotalSum())}
                        </div>
                        <div className="border" style={{width: '30%'}}>
                            Antal produkter: {getCartItemsCount()} st
                        </div>
                    </Card.Footer>
                </Card>
            </div>
            <div className="m-5 d-flex justify-content-center">
                <Button className="me-5" form="candy-form" type="submit">Ge mig mitt godis NU!</Button>
                <Button form="candy-form" type="reset" variant="outline-warning">Rensa</Button>
            </div>
        </div>}
        </>
    );
};

export default CandyCheckoutForm;