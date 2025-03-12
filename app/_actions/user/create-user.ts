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
            return {
                status: errorData.status,
                success: false,
                message: 'Error creating user',
            };
        }

        return {
            status: response.status,
            success: true,
            message: 'User created successfully!',
        };
    } catch (error: unknown) {
        console.error('Error creating user:', error);

        return {
            status: 500,
            success: false,
            message: error instanceof Error ? error.message : 'Server error',
        };
    }
};
