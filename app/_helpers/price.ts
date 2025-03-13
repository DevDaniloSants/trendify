import { Product } from '../_data-access/interfaces/product';
import { formatCurrency } from './formatCurrency';

export const applyDiscountToProduct = (
    product: Product
): { discountedPrice: string; discountPercentage: number } => {
    const discountPercentage = Math.floor(Math.random() * 50);

    if (discountPercentage === 0) {
        return {
            discountedPrice: formatCurrency(product.price),
            discountPercentage: 0,
        };
    }

    const discount = product.price * (discountPercentage / 100);

    const newPrice = product.price - discount;

    const discountedPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
    }).format(newPrice);

    return {
        discountedPrice,
        discountPercentage,
    };
};

export const convertPriceToNumber = (price: string) => {
    return Number(price.replace('R$', '').replace(',', '.').trim());
};
