import { CANDYSHOP_BASE_URL } from "./candyConfig";

function createCandyImageUrl(imagePath: string): string {
    return `${CANDYSHOP_BASE_URL}${imagePath}`;
}

export default createCandyImageUrl;