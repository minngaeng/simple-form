import { InputHTMLAttributes } from 'react';

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

export interface FormSubmit {
    id: string;
    password: string;
    'password-confirm': string;
    name: string;
    email: string;
}
