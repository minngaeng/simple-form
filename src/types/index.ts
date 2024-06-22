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
    value: string;
    setValue: (v: string) => void;
    // TOOD: error 처리
    error?: FieldError;
    setError?: (v: FieldError) => void;
    // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
