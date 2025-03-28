'use server';

import { db } from '@/app/_lib/prisma';

const createUserPostgres = async ({
    id,
    email,
}: {
    id: number;
    email: string;
}) => {
    await db.user.create({
        data: {
            id,
            email,
        },
    });
};

export default createUserPostgres;
