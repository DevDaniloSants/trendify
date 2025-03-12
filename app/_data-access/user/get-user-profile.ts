'use server';

import { revalidatePath } from 'next/cache';

export const getUserProfile = async ({
    accessToken,
}: {
    accessToken: string;
}) => {
    if (!accessToken) {
        return {
            status: 401,
            success: false,
            message: 'User token is required',
        };
    }

    const response = await fetch(`${process.env.API_URL}/auth/profile`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    if (!response.ok) {
        return {
            status: response.status,
            success: false,
            message: 'User not found',
        };
    }

    const user = await response.json();
    revalidatePath('/', 'layout');

    return user;
};
