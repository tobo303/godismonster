import React from 'react';
import { Card } from 'react-bootstrap';

import { CandyCardProduct } from '../types/CandyProduct';
import createCandyImageUrl from '../scripts/createImageUrl';
import currencyFormatter from '../scripts/currencyFormatter';

import { Link } from 'react-router-dom';
import { IMAGE_ADD_TO_CART_DISABLED_URL } from '../scripts/candyConfig';
import CandyAddToShoppingCartButton from './shoppingcart/CandyAddToShoppingCartButton';

interface CandyCardProps {
    candy: CandyCardProduct;
}

const CandyCard: React.FC<CandyCardProps> = (product) => {

    const detailUrl = `/produkter/${product.candy.id}`;
    
    // TODO: add use state for stock check
    
    const conditionalPriceClasses = (product.candy.on_sale ? 'candy-card-sale' : 'candy-price') + ' flex-grow-1';

    return (
        <>

        <div>
            <Card className="candyCard align-self-start">
                {product.candy.on_sale && product.candy.stock_status === "instock" && 
                    <Card.Header  className='candy-card-header-sale'>
                        <div>
                            REA REA REA
                        </div>
                    </Card.Header>
                }
                {product.candy.stock_status === "outofstock" && 
                    <Card.Header className='candy-card-header-out-of-stock'>
                        <div>
                            TILLFÄLLIGT SLUT
                        </div>
                    </Card.Header>
                }

                <Link to={detailUrl}>
                    <Card.Img style={{ objectFit: 'fill'}} variant="top" src={createCandyImageUrl(product.candy.images.thumbnail)} />
                </Link>
                <Card.Body>
                    <Link to={detailUrl}>
                        <Card.Title className='candy-card-title'>{product.candy.name}</Card.Title>
                    </Link>
                </Card.Body>
                <Card.Footer>
                <div className="d-flex justify-content-between align-content-center">
                        <div className={conditionalPriceClasses}>
                            {currencyFormatter(product.candy.price)}
                        </div>
                            {
                                product.candy.stock_status === 'outofstock' &&
                                <img className='candy-card-header-out-of-stock-image' width={20} height={20} src={IMAGE_ADD_TO_CART_DISABLED_URL} />
                            }
                            { product.candy.stock_status === 'instock' && <CandyAddToShoppingCartButton productId={product.candy.id} /> }
                    </div>
                </Card.Footer>
            </Card>
        </div>
        </>
    );
};

export default CandyCard;