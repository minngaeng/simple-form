import { FormHTMLAttributes, InputHTMLAttributes } from 'react';

export type FieldError = {
    success: boolean;
    message?: string;
};

export type FormError = Record<string, FieldError>;
export type FormData = Record<string, string>;

export interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    validate?: ((v: string) => FieldError)[];
    value?: string;
    error?: FieldError;
    setValue?: (v: string) => void;
    setError?: (v: FieldError) => void;
}

export interface FormProps
    extends Omit<FormHTMLAttributes<HTMLFormElement>, 'children'> {
    children: (props: {
        values: FormData;
        errors: FormError;
        setValues: (v: FormData) => void;
        setErrors: (v: FormError) => void;
    }) => React.ReactNode;
    initialData: FormData;
}
