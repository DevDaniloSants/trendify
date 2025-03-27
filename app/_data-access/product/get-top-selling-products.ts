'use server';

import { filterValidImages } from '@/app/_helpers/is-valid-image-url';
import { formatCurrency } from '../../_helpers/formatCurrency';

import { GetProducDTO, Product } from '../interfaces/product';

export const getTopSellingProducts = async (): Promise<{
    status: number;
    success: boolean;
    message: string;
    data?: GetProducDTO[];
}> => {
    try {
        const response = await fetch(
            process.env.API_URL +
                '/products/?price_min=39&price_max=100000000&offset=10&limit=100'
        );

        if (!response.ok) {
            const errorData = await response.json();
            return {
                status: response.status,
                success: false,
                message: errorData?.message || 'Failed to fetch data',
            };
        }

        const data: Product[] = await response.json();
        const filteredProducts = filterValidImages(data);

        const products = filteredProducts
            .map(
                (product: Product): GetProducDTO => ({
                    ...product,
                    price: formatCurrency(product.price),
                })
            )
            .slice(0, 10);

        return {
            status: response.status,
            success: true,
            message: 'Top selling products fetched successfully',
            data: products,
        };
    } catch (error: unknown) {
        console.error('Error fetching top-selling products:', error);
        return {
            status: 500,
            success: false,
            message: error instanceof Error ? error.message : 'Server error',
        };
    }
};
