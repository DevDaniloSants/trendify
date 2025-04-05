'use server';

import { db } from '@/app/_lib/prisma';
import { revalidatePath } from 'next/cache';

const RemoveFavoriteProductPostgres = async ({
    productId,
}: {
    productId: number;
}) => {
    const product = await db.favorite.delete({
        where: {
            id: productId,
        },
    });

    revalidatePath('/', 'layout');
    revalidatePath('/products/favorite', 'page');

    return product;
};

export default RemoveFavoriteProductPostgres;
