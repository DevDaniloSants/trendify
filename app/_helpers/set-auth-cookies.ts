import { cookies } from 'next/headers';

export const setAuthCookies = async (
    accessToken: string,
    refreshToken: string
) => {
    const cookieStore = await cookies();

    cookieStore.set('access_token', accessToken, {
        httpOnly: true,
        secure: true,
        path: '/',
        maxAge: 20 * 24 * 60 * 60,
    });

    cookieStore.set('refresh_token', refreshToken, {
        httpOnly: true,
        secure: true,
        path: '/',
        maxAge: 10 * 60 * 60,
    });
};
