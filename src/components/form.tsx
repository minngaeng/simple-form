import { useState } from 'react';
import { FormError, FormData, FormProps } from '../types';

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
                setValues,
                setErrors,
            })}
            {/* {React.Children.map(
                props.children,
                (child: React.ReactElement<FieldProps>) =>
                    React.cloneElement(child, {
                        value: values?.[child.props.name],
                        setValue: (v: string) => {
                            setValues({
                                ...values,
                                [child.props.name]: v,
                            });
                        },
                        error: errors?.[child.props.name],
                        setError: (v: FieldError) => {
                            setErrors({
                                ...errors,
                                [child.props.name]: v,
                            });
                        },
                    })
            )} */}
        </form>
    );
};

export default Form;
