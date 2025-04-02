'use server';

import { db } from '@/app/_lib/prisma';
import { IFavorite } from '../interfaces/favorite';

import getFavoriteProduct from './get-favorite-product-postgres';
import { revalidatePath } from 'next/cache';

const addFavoriteProduct = async ({ product }: IFavorite) => {
    const productIsAlreadyOnFavorite = getFavoriteProduct({
        productId: product.id,
    });

    if (!productIsAlreadyOnFavorite) return;

    await db.favorite.create({
        data: {
            userId: product.userId,
            id: product.id,
            title: product.title,
            images: product.images,
            price: product.price,
        },
    });

    revalidatePath('/', 'layout');
};

export default addFavoriteProduct;
