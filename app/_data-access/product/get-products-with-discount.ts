'use server';

import { formatCurrency } from '../../_helpers/formatCurrency';
import { applyDiscountToProduct } from '../../_helpers/price';
import { GetProducDTO, Product } from '../interfaces/product';

export const getProductsWithDiscount = async (): Promise<GetProducDTO[]> => {
    const data = await fetch(
        process.env.API_URL + '/products/?offset=10&limit=10'
    ).then((res) => res.json());

    if (!data) {
        throw new Error('Failed to fetch data');
    }

    const products = data.map((product: Product): GetProducDTO => {
        const { discountedPrice, discountPercentage } =
            applyDiscountToProduct(product);

        return {
            id: product.id,
            title: product.title,
            description: product.description,
            price: formatCurrency(product.price),
            image: product.images[0],
            discountPercentage,
            discountedPrice,
        };
    });

    return products;
};
