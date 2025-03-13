'use server';

import { filterValidImages } from '@/app/_helpers/is-valid-image-url';
import { formatCurrency } from '../../_helpers/formatCurrency';

import { GetProducDTO, Product } from '../interfaces/product';

export const getTopSellingProducts = async (): Promise<GetProducDTO[]> => {
    const data = await fetch(
        process.env.API_URL +
            '/products/?price_min=20&price_max=100000000&offset=10&limit=100'
    ).then((res) => res.json());

    if (!data) {
        throw new Error('Failed to fetch data');
    }

    const filteredProducts = filterValidImages(data);

    const products = filteredProducts
        .map((product: Product): GetProducDTO => {
            return {
                ...product,
                price: formatCurrency(product.price),
            };
        })
        .slice(0, 10);

    return products;
};
