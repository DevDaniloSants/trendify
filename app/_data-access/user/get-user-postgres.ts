'use server';

import { db } from '@/app/_lib/prisma';

export const getUserPostgres = async ({ userId }: { userId: number }) => {
    const user = await db.user.findUnique({
        where: {
            id: userId,
        },
    });

    return user;
};
