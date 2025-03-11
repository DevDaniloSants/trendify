import { z } from 'zod';

export const signInSchema = z.object({
    email: z.string().email({
        message: 'Insira um email válido.',
    }),
    password: z.string(),
});
