'use server';

import { filterValidImages } from '@/app/_helpers/is-valid-image-url';
import { formatCurrency } from '../../_helpers/formatCurrency';
import { applyDiscountToProduct } from '../../_helpers/price';
import { GetProducDTO, Product } from '../interfaces/product';

export const getProductsWithDiscount = async (): Promise<{
    status: number;
    success: boolean;
    message: string;
    data?: GetProducDTO[];
}> => {
    try {
        const response = await fetch(
            process.env.API_URL + '/products/?offset=10&limit=10'
        );

        if (!response.ok) {
            const errorData = await response.json();
            return {
                status: response.status,
                success: false,
                message:
                    errorData?.message ||
                    'Failed to fetch products with discount',
            };
        }

        const data = await response.json();
        const filteredProducts = filterValidImages(data);

        const products = filteredProducts
            .map((product: Product): GetProducDTO => {
                const { discountedPrice, discountPercentage } =
                    applyDiscountToProduct(product);

                return {
                    ...product,
                    price: formatCurrency(product.price),
                    discountPercentage,
                    discountedPrice,
                };
            })
            .slice(0, 10);

        return {
            status: response.status,
            success: true,
            message: 'Products with discount fetched successfully',
            data: products,
        };
    } catch (error: unknown) {
        console.error('Error fetching products with discount:', error);
        return {
            status: 500,
            success: false,
            message: error instanceof Error ? error.message : 'Server error',
        };
    }
};
