import { Button } from '@/app/_components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from '@/app/_components/ui/form';
import { registerSchema } from '@/app/_schemas/auth-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { CustomInputForm } from './custom-input-form';
import { createUser } from '@/app/_actions/user/create-user';
import { toast } from 'sonner';

interface FormRegisterProps {
    toggleRegisterDialog: () => void;
}

const FormRegister = ({ toggleRegisterDialog }: FormRegisterProps) => {
    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            avatar: '',
        },
    });

    async function onSubmit(values: z.infer<typeof registerSchema>) {
        const { success } = await createUser(values);

        if (!success) {
            toast.error('Erro ao criar usuário');
        }

        form.reset();
        toast.success('Usuário criado com sucesso!');
        toggleRegisterDialog();
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <CustomInputForm
                                    {...field}
                                    type="name"
                                    placeholder="Nome"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <CustomInputForm
                                    {...field}
                                    type="email"
                                    placeholder="Email"
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
                                    placeholder="Senha"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <CustomInputForm
                                    {...field}
                                    type="password"
                                    placeholder="Digite sua senha novamente"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="avatar"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <CustomInputForm
                                    {...field}
                                    type="text"
                                    placeholder="Insira uma url"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    type="submit"
                    className="bg-destructive hover:bg-destructive/90 w-full cursor-pointer py-6 text-white"
                >
                    {form.formState.isSubmitting ? (
                        <div className="flex items-center justify-center">
                            <span className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-t-transparent"></span>
                            <span>Carregando...</span>
                        </div>
                    ) : (
                        'Cadastrar'
                    )}
                </Button>
            </form>
        </Form>
    );
};

export default FormRegister;
