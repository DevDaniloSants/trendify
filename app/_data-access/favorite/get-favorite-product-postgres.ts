'use server';

import { db } from '@/app/_lib/prisma';

const getFavoriteProduct = async ({ productId }: { productId: number }) => {
    const product = await db.favorite.findUnique({
        where: {
            id: productId,
        },
    });

    return product;
};

export default getFavoriteProduct;
