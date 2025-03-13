'use server';

import { filterValidImages } from '@/app/_helpers/is-valid-image-url';
import { formatCurrency } from '../../_helpers/formatCurrency';

import { GetProducDTO, Product } from '../interfaces/product';

export const getProductsByCategory = async ({
    slug,
}: {
    slug: string;
}): Promise<{
    status: number;
    success: boolean;
    message: string;
    data?: GetProducDTO[];
}> => {
    try {
        const response = await fetch(
            process.env.API_URL + '/products/?categorySlug=' + slug
        );

        if (!response.ok) {
            const errorData = await response.json();
            return {
                status: response.status,
                success: false,
                message: errorData?.message || 'Failed to fetch products',
            };
        }

        const data: Product[] = await response.json();
        const filteredProducts = filterValidImages(data);

        const products = filteredProducts
            .map((product: Product): GetProducDTO => {
                return {
                    ...product,
                    price: formatCurrency(product.price),
                };
            })
            .slice(0, 10);

        return {
            status: response.status,
            success: true,
            message: 'Products fetched successfully',
            data: products,
        };
    } catch (error: unknown) {
        console.error('Error fetching products:', error);
        return {
            status: 500,
            success: false,
            message: error instanceof Error ? error.message : 'Server error',
        };
    }
};
