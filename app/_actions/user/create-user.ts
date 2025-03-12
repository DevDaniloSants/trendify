'use server';

import { User } from '../interfaces/user';

export const createUser = async (data: User) => {
    try {
        const response = await fetch(`${process.env.API_URL}/users/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Erro ao criar usuário');
        }

        return {
            success: true,
            message: 'Usuário criado com sucesso!',
        };
    } catch (error: unknown) {
        console.error('Erro ao criar usuário:', error);

        return {
            success: false,
            message: error instanceof Error ? error.message : 'Server error',
        };
    }
};
