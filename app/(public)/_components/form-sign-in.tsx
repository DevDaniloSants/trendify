'use client';

import { Form } from '@/app/_components/ui/form';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { signInSchema } from '@/app/_schemas/auth-schema';
import { z } from 'zod';

import { signIn } from '@/app/_actions/user/auth/sign-in';
import { useUser } from '@/app/_hooks/useUser';

import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import InputField from '@/app/_components/input-field';
import SubmitButton from '@/app/_components/submit-button';

const FormSignIn = () => {
    const router = useRouter();
    const { setProfileUser } = useUser();

    const form = useForm<z.infer<typeof signInSchema>>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    async function onSubmit(values: z.infer<typeof signInSchema>) {
        const { data: user, success } = await signIn(values);

        if (!success) {
            toast.error('Usuário ou senha inválidos', {
                description: 'Tente novamente',
            });
            return;
        }

        form.reset();
        toast.success('Login realizado com sucesso');

        await setProfileUser(user);

        if (user) {
            router.push('/');
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
                <InputField
                    control={form.control}
                    name="email"
                    type="email"
                    placeholder="Digite seu email"
                />
                <InputField
                    control={form.control}
                    name="password"
                    type="password"
                    placeholder="Digite sua senha"
                />

                <SubmitButton form={form} title="Entrar" />
            </form>
        </Form>
    );
};

export default FormSignIn;
