'use server';

import { AuthenticateUser } from '../interfaces/user';
import { setAuthCookies } from '@/app/_helpers/set-auth-cookies';

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

        const { access_token, refresh_token } = await response.json();

        await setAuthCookies(access_token, refresh_token);

        return {
            success: true,
            message: 'Usuário autenticado com sucesso!',
        };
    } catch (error: unknown) {
        console.error('Erro ao authenticar usuário', error);

        return {
            success: false,
            message: error instanceof Error ? error.message : 'Server error',
        };
    }
};
