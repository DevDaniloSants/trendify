'use client';

import {
    FormField,
    FormItem,
    FormControl,
    FormMessage,
} from '@/app/_components/ui/form';

import { Control, FieldValues, Path } from 'react-hook-form';
import { Input } from './ui/input';

interface InputFieldProps<T extends FieldValues> {
    name: Path<T>;
    type: string;
    placeholder: string;
    control: Control<T>;
}

const InputField = <T extends FieldValues>({
    name,
    type,
    placeholder,
    control,
}: InputFieldProps<T>) => (
    <FormField
        control={control}
        name={name}
        render={({ field }) => (
            <FormItem>
                <FormControl>
                    <Input
                        type={type}
                        placeholder={placeholder}
                        className={`border-input h-10 w-full rounded-none border-b-2 bg-transparent focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0`}
                        {...field}
                    />
                </FormControl>
                <FormMessage />
            </FormItem>
        )}
    />
);
export default InputField;
