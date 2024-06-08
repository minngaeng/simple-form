import React from 'react';
import { useField } from 'formik';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
}

const TextField: React.FC<TextFieldProps> = ({ ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div className="text-field">
            <input {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error-message">{meta.error}</div>
            ) : null}
        </div>
    );
};

export default TextField;
