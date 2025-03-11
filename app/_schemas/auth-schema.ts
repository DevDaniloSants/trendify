import { z } from 'zod';

export const signInSchema = z.object({
    email: z.string().email({
        message: 'Insira um email válido.',
    }),
    password: z.string(),
});

export const registerSchema = z.object({
    name: z.string().email({
        message: 'Insira um email válido.',
    }),
    email: z.string().email({
        message: 'Insira um email válido.',
    }),
    password: z.string(),
    confirmPassword: z.string(),
    avatar: z.any(),
});
