'use client';

import { Button } from '@/app/_components/ui/button';
import {
    FormField,
    FormItem,
    FormControl,
    FormMessage,
    Form,
} from '@/app/_components/ui/form';
import RegisterDialog from './register-dialog';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { signInSchema } from '@/app/_schemas/auth-schema';
import { z } from 'zod';

import { CustomInputForm } from './custom-input-form';
import { signIn } from '@/app/_actions/user/auth/sign-in';
import { useUser } from '@/app/_hooks/useUser';

import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

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
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <CustomInputForm
                                    {...field}
                                    type="email"
                                    placeholder="Digite seu email"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <CustomInputForm
                                    {...field}
                                    type="password"
                                    placeholder="Password"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    type="submit"
                    disabled={form.formState.isSubmitting}
                    className="bg-destructive hover:bg-destructive/90 w-full cursor-pointer py-6 text-white"
                >
                    {form.formState.isSubmitting ? (
                        <div className="flex items-center justify-center">
                            <span className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-t-transparent"></span>
                            <span>Carregando...</span>
                        </div>
                    ) : (
                        'Entrar'
                    )}
                </Button>
                <div className="flex w-full items-center justify-end gap-2">
                    <p className="text-muted-foreground text-sm">
                        Você não possui uma conta ?
                    </p>
                    <RegisterDialog />
                </div>
            </form>
        </Form>
    );
};

export default FormSignIn;
