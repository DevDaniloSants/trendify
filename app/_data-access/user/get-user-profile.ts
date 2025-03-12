'use server';

import { getAccessToken } from '@/app/_helpers/get-access-token';

export const getUserProfile = async () => {
    try {
        const accessToken = getAccessToken();

        if (!accessToken) {
            throw new Error('Usuário não encontrado');
        }

        const response = await fetch(`${process.env.API_URL}/auth/profile`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        if (!response.ok) {
            throw new Error('Erro ao buscar perfil do usuário');
        }

        return await response.json();
    } catch (error: unknown) {
        console.error('Erro ao buscar perfil do usuário', error);

        return null;
    }
};
