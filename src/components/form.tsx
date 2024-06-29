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

    return (
        <form {...props}>
            {children({
                values,
                errors,
                setValues,
                setErrors,
                setFieldError,
            })}
        </form>
    );
};

export default Form;
