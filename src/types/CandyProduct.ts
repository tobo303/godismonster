export interface CandyProductBase {
    id: number;
}

export interface CandyCardProduct extends CandyProductBase {
    name: string;
    images: CandyImages;
    price: number;
    on_sale: boolean;
    stock_status: string;
    stock_quantity: number;
}

export interface CandyProduct extends CandyCardProduct {
    tags: CandyTag[];
}

export interface CandyProductDetails extends CandyProduct {
    description: string;
}

//#region Array types
export interface CandyImages {
    thumbnail: string;
    large: string;
}

export interface CandyTag {
    id: number;
    name: string;
    slug: string;
}
//#endregion