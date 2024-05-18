import { FieldProps } from '../types';

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
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const v = e.target.value;
        setValue?.(v);
        // TODO: validation
        // 1. validate 함수가 주어진 경우, validate 함수를 실행하여 에러 메시지를 설정합니다.
        // 2. error가 있는 경우 setError 함수를 호출하여 에러 메시지를 설정합니다.
        // 3. error가 없는 경우, success를 true로 설정합니다.

        /**
         * 민경 : 아래 코드보다 더 좋은 코드가 있을지 고민하고 있습니다.
         */
        if (validate) {
            let validateErr = { success: true, message: '' };
            for (const validator of validate) {
                const result = validator(v);
                if (!result.success) {
                    validateErr = { ...result, message: result.message || '' };
                    break;
                }
            }
            if (setError) {
                setError(validateErr);
            }
        }
    };

    return (
        <div className={'text-field'}>
            <input value={value} onChange={handleChange} {...rest} />
            <div className={'error-message'}>
                {!error.success && (
                    <p id={`${rest.name}-error`}>{error.message}</p>
                )}
            </div>
        </div>
    );
};

export default TextField;
