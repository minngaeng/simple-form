import { useState } from 'react';
import { FormError, FormData, FormProps, FieldError } from '../types';

const getInitialError = (data?: FormData) => {
    const error: FormError = {};
    for (const key in data) {
        error[key] = {
            success: true,
            message: undefined,
        };
    }
    return error;
};

const Form = ({ children, initialData, ...props }: FormProps) => {
    const [values, setValues] = useState<FormData>(initialData);
    const [errors, setErrors] = useState<FormError>(
        getInitialError(initialData)
    );

    const setFieldError = (name: string) => (err: FieldError) => {
        setErrors({ ...errors, [name]: err });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <form {...props}>
            {children({
                values,
                errors,
                setValues,
                setErrors,
                setFieldError,
                handleChange,
            })}
        </form>
    );
};

export default Form;
