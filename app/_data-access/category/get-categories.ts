'use server';

import { Category } from '../interfaces/category';

export const getCategories = async (): Promise<{
    status: number;
    success: boolean;
    message: string;
    data?: Category[];
}> => {
    try {
        const response = await fetch(`${process.env.API_URL}/categories`, {
            next: { revalidate: 86400 },
        });

        if (!response.ok) {
            const errorData = await response.json();
            return {
                status: response.status,
                success: false,
                message: errorData?.message || 'Failed to fetch categories',
            };
        }

        const data: Category[] = await response.json();
        return {
            status: response.status,
            success: true,
            message: 'Categories fetched successfully',
            data,
        };
    } catch (error: unknown) {
        console.error('Error fetching categories:', error);
        return {
            status: 500,
            success: false,
            message: error instanceof Error ? error.message : 'Server error',
        };
    }
};
