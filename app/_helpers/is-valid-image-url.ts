import { allowedDomains } from '../_constants/allowed-domais-image';
import { Product } from '../_data-access/interfaces/product';

export const isValidImageUrl = (url: string): boolean => {
    return url.startsWith(allowedDomains);
};

export const filterValidImages = (products: Product[]): Product[] => {
    return products.filter((product) => {
        const validImages = product.images.filter(isValidImageUrl);
        return validImages.length > 0;
    });
};
