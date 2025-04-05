'use server';

import { db } from '@/app/_lib/prisma';
import { IFavorite } from '../../_data-access/interfaces/favorite';

import getFavoriteProduct from '../../_data-access/favorite/get-favorite-product-postgres';
import { revalidatePath } from 'next/cache';
import { getUserPostgres } from '@/app/_data-access/user/get-user-postgres';

const addFavoriteProduct = async ({
    product,
    userId,
}: {
    product: IFavorite;
    userId: number;
}) => {
    const user = await getUserPostgres({ userId });

    if (!user) return null;

    const productIsAlreadyOnFavorite = await getFavoriteProduct({
        productId: product.id,
    });

    if (productIsAlreadyOnFavorite) return productIsAlreadyOnFavorite;

    const newFavorite = await db.favorite.create({
        data: {
            userId,
            id: product.id,
            title: product.title,
            images: product.images,
            price: product.price,
        },
    });

    revalidatePath('/', 'layout');

    return newFavorite;
};

export default addFavoriteProduct;
