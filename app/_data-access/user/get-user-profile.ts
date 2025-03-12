'use server';

export const getUserProfile = async ({
    accessToken,
}: {
    accessToken: string;
}) => {
    try {
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

        const user = await response.json();

        return user;
    } catch (error: unknown) {
        console.error('Erro ao buscar perfil do usuário', error);

        return null;
    }
};
