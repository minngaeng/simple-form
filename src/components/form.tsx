import React, { FormHTMLAttributes, useState } from 'react';
import { FormError, FormData } from '../types';

interface FormProps
    extends Omit<FormHTMLAttributes<HTMLFormElement>, 'children'> {
    children: (props: {
        values: FormData;
        errors: FormError;
    }) => React.ReactNode;
    initialData: FormData;
}

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

    return (
        <form {...props}>
            {children({
                values,
                errors,
            })}
        </form>
    );
};

export default Form;
