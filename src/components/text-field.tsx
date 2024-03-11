import {InputHTMLAttributes} from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    validate?: ((v: string) => void)[]
}

// NOTE: 아래 주석 /* eslint-disable @typescript-eslint/no-unused-vars */ 를 제거하고 작업 해주세요.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TextField = ({validate, ...rest}: Props) => {
    const error: {
        success: boolean,
        message?: string,
    } = {
        success: false,
        message: '값을 입력해주세요.',
    };

    return (
        <div className={'text-field'}>
            <input {...rest}/>
            <div className={'error-message'}>
                {!error.success && <p id={`${rest.name}-error`}>{error.message}</p>}
            </div>
        </div>
    );
}

export default TextField;
