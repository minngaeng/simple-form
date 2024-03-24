import { FieldProps } from '../types';

// NOTE: 아래 주석(/* eslint-disable @typescript-eslint/no-unused-vars */)을 제거하고 작업 해주세요.
/* eslint-disable @typescript-eslint/no-unused-vars */

/*
 * TextField 컴포넌트는 input 요소를 렌더링하고, 에러 메시지를 표시합니다.
 **/
const TextField = ({
    validate,
    error = {
        success: true,
    },
    value,
    setValue,
    setError,
    ...rest
}: FieldProps) => {
    return (
        <div className={'text-field'}>
            <input value={value} onChange={() => {}} {...rest} />
            <div className={'error-message'}>
                {!error.success && (
                    <p id={`${rest.name}-error`}>{error.message}</p>
                )}
            </div>
        </div>
    );
};

export default TextField;
