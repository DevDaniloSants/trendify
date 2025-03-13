'use server';

import { Category } from '../interfaces/category';

export const getCategories = async (): Promise<Category[]> => {
    const data = await fetch(`${process.env.API_URL}/categories`).then((res) =>
        res.json()
    );

    if (!data) {
        throw new Error('Failed to fetch data');
    }

    return data;
};
