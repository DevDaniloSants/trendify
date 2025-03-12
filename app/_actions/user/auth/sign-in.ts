'use server';

import { setAuthCookies } from '@/app/_helpers/set-auth-cookies';

import { getUserProfile } from '@/app/_data-access/user/get-user-profile';
import { SignIn } from '../../interfaces/user';

export const signIn = async (data: SignIn) => {
    const response = await fetch(`${process.env.API_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        await response.json();
        return {
            status: response.status,
            success: false,
            message: 'Unauthorized',
        };
    }

    const { access_token: accessToken, refresh_token: refreshToken } =
        await response.json();

    await setAuthCookies(accessToken, refreshToken);

    const user = await getUserProfile({ accessToken });

    return {
        status: response.status,
        success: true,
        message: 'User authenticated successfully',
        data: user,
    };
};
