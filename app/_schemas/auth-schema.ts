import { z } from 'zod';

export const signInSchema = z.object({
    email: z.string().email({
        message: 'Insira um email válido.',
    }),
    password: z.string(),
});

export const registerSchema = z
    .object({
        name: z.string().min(3, {
            message: 'Insira um nome válido.',
        }),
        email: z.string().email({
            message: 'Insira um email válido.',
        }),

        password: z.string().min(6, {
            message: 'Insira uma senha válida.',
        }),
        confirmPassword: z.string(),
        avatar: z.string().url({
            message: 'Insira uma url válida.',
        }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'As senhas não conferem.',
        path: ['confirmPassword'],
    });
