import { Form } from '@/app/_components/ui/form';
import { registerSchema } from '@/app/_schemas/auth-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { createUser } from '@/app/_actions/user/create-user';
import { toast } from 'sonner';
import InputField from '@/app/_components/input-field';
import SubmitButton from '@/app/_components/submit-button';
import createUserPostgres from '@/app/_data-access/user/create-user-postgres';

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
        const { success, data } = await createUser(values);

        console.log({ data });

        if (!success || !data) {
            toast.error('Erro ao criar usuário');
        }

        await createUserPostgres({
            id: data.id,
            email: data.email,
        });

        form.reset();
        toast.success('Usuário criado com sucesso!');
        toggleRegisterDialog();
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
                <InputField
                    name="name"
                    type="text"
                    placeholder="Nome"
                    control={form.control}
                />
                <InputField
                    control={form.control}
                    name="email"
                    type="email"
                    placeholder="Email"
                />

                <InputField
                    control={form.control}
                    name="password"
                    type="password"
                    placeholder="Senha"
                />
                <InputField
                    control={form.control}
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirme sua senha"
                />
                <InputField
                    control={form.control}
                    name="avatar"
                    type="text"
                    placeholder="Insira uma url"
                />

                <SubmitButton form={form} title="Registrar" />
            </form>
        </Form>
    );
};

export default FormRegister;
