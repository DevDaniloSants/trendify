'use server';

import { db } from '@/app/_lib/prisma';

const getFavoriteProduct = async ({ productId }: { productId: number }) => {
    const favoriteProducts = await db.favorite.findUnique({
        where: {
            id: productId,
        },
    });

    return favoriteProducts;
};

export default getFavoriteProduct;
