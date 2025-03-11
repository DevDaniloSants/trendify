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

const FormRegister = () => {
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

    function onSubmit(values: z.infer<typeof registerSchema>) {
        console.log(values);
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
                                    type="confirmPassword"
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
                                <CustomInputForm {...field} type="file" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    type="submit"
                    className="bg-destructive hover:bg-destructive/90 w-full cursor-pointer py-6 text-white"
                >
                    Cadastrar
                </Button>
            </form>
        </Form>
    );
};

export default FormRegister;
