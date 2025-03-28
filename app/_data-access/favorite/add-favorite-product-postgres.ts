'use server';

import { db } from '@/app/_lib/prisma';
import { IFavorite } from '../interfaces/favorite';

const addFavoriteProduct = async ({ product }: IFavorite) => {
    const { userId } = product;

    await db.favorite.create({
        data: {
            userId,
            id: product.id,
            title: product.title,
            images: product.images,
            price: product.price,
        },
    });
};

export default addFavoriteProduct;
