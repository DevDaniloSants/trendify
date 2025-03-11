import { Input } from '@/app/_components/ui/input';

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export function CustomInputForm({ className, ...props }: CustomInputProps) {
    return (
        <Input
            className={`border-input h-10 w-full rounded-none border-b-2 bg-transparent focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 ${className}`}
            {...props}
        />
    );
}
