import { UseFormReturn } from 'react-hook-form';
import { Button } from './ui/button';
import { z } from 'zod';

interface SubmitButtonProps<T extends z.ZodType> {
    form: UseFormReturn<z.infer<T>>;
    title: string;
}
const SubmitButton = <T extends z.ZodType>({
    form,
    title,
}: SubmitButtonProps<T>) => {
    return (
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
                <>{title}</>
            )}
        </Button>
    );
};
export default SubmitButton;
