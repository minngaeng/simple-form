import React, { FormHTMLAttributes, ReactElement, useState } from 'react';
import { FieldProps, FieldError, FormError, FormData } from '../types';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
    children: (props: any) => void;
    initialData: FormData;
}
// TODO: 1. type 에러 해결

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

const Form = (props: FormProps) => {
    const [values, setValues] = useState<FormData>(props.initialData);
    const [errors, setErrors] = useState<FormError>();
    getInitialError(props.initialData);

    return (
        <form id={props.id} onSubmit={props.onSubmit}>
            {props.children({
                values,
                errors,
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
