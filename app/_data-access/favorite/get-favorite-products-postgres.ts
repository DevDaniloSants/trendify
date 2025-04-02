'use server';

import { db } from '@/app/_lib/prisma';

const getFavoriteProducts = async ({ userId }: { userId: number }) => {
    const favoriteProducts = await db.favorite.findMany({
        where: {
            userId,
        },
    });

    return {
        products: favoriteProducts.map((favorite) => ({
            id: favorite.id,
            title: favorite.title,
            images: favorite.images,
            price: favorite.price,
        })),
    };
};

export default getFavoriteProducts;
