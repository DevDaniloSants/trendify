'use server';

import { formatCurrency } from '../../_helpers/formatCurrency';

import { GetProducDTO, Product } from '../interfaces/product';

export const getTopSellingProducts = async (): Promise<GetProducDTO[]> => {
    const data = await fetch(
        process.env.API_URL +
            '/products/?price_min=50&price_max=1000&offset=10&limit=10'
    ).then((res) => res.json());

    if (!data) {
        throw new Error('Failed to fetch data');
    }

    const products = data.map((product: Product): GetProducDTO => {
        return {
            ...product,
            price: formatCurrency(product.price),
        };
    });

    return products;
};
