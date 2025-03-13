'use server';

import { formatCurrency } from '@/app/_helpers/formatCurrency';
import { GetProducDTO } from '../interfaces/product';

export const getProduct = async (
    id: string
): Promise<{
    status: number;
    success: boolean;
    message: string;
    data?: GetProducDTO;
}> => {
    try {
        const response = await fetch(process.env.API_URL + '/products/' + id);

        if (!response.ok) {
            const errorData = await response.json();
            return {
                status: response.status,
                success: false,
                message: errorData?.message || 'Failed to fetch product data',
            };
        }

        const data = await response.json();
        const product: GetProducDTO = {
            ...data,
            price: formatCurrency(data.price),
        };

        return {
            status: response.status,
            success: true,
            message: 'Product fetched successfully',
            data: product,
        };
    } catch (error: unknown) {
        console.error('Error fetching product:', error);
        return {
            status: 500,
            success: false,
            message: error instanceof Error ? error.message : 'Server error',
        };
    }
};
