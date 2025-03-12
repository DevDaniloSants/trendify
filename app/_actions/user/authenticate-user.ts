'use server';

import { setAuthCookies } from '@/app/_helpers/set-auth-cookies';
import { AuthenticateUser } from '../interfaces/user';
import { getUserProfile } from '@/app/_data-access/user/get-user-profile';

export const authenticateUser = async (data: AuthenticateUser) => {
    try {
        const response = await fetch(`${process.env.API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(
                errorData.message || 'Erro ao tentar autenticar usuário'
            );
        }

        const { access_token: accessToken, refresh_token: refreshToken } =
            await response.json();

        await setAuthCookies(accessToken, refreshToken);

        const user = await getUserProfile({ accessToken });

        return {
            success: true,
            message: 'Usuário autenticado com sucesso',
            data: user,
        };
    } catch (error: unknown) {
        console.error('Erro ao autenticar usuário', error);

        return {
            success: false,
            message:
                error instanceof Error
                    ? error.message
                    : 'Erro interno no servidor',
        };
    }
};
