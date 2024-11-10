// import dotenv from 'dotenv';

import { makeMinutes } from "./makeTime";

// dotenv.config();

// export const CANDYSHOP_BASE_URL = process.env.ENV_CANDYSHOP_BASE_URL!;
// export const CANDYSHOP_PRODUCTS_URL = process.env.ENV_CANDYSHOP_PRODUCTS_URL!;
// export const CANDYSHOP_DEFAULT_TIMEOUT = Number(process.env.ENV_CANDYSHOP_DEFAULT_TIMEOUT) || 60_000;

export const USER_ID="62";

export const CANDYSHOP_BASE_URL = "https://www.bortakvall.se";
export const CANDYSHOP_PRODUCTS_URL = "/api/v2/products"
export const CANDYSHOP_ORDER_POST_URL = "/api/v2/users/" + USER_ID + "/orders";
export const CANDYSHOP_DEFAULT_TIMEOUT = makeMinutes(1);
export const HEADER_WARNING="Rackarns bananer!";

export const IMAGE_LOGO_URL = "/images/png/logo.png";
export const IMAGE_CART_ADD_ICON_URL = "/images/svg/add-to-cart-icon.svg";
export const IMAGE_ADD_TO_CART_DISABLED_URL = "/images/svg/stop-sign.svg";
export const IMAGE_404_URL = "/images/jpg/cat-404.jpg";
export const IMAGE_TRASH_CAN_URL = "/images/svg/trash-can.svg";
