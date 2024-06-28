import './App.css';
import TextField from './components/text-field.tsx';
import Form from './components/form.tsx';

import {
    emailValidation,
    max,
    min,
    passwordValidation,
    required,
    match,
} from './utils';
import { FieldError } from './types/index.ts';

function App() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const initialData = {
        id: '',
        password: '',
        'password-confirm': '',
        name: '',
        email: '',
    };
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                alignItems: 'center',
            }}
        >
            <h1>회원가입</h1>
            <p>회원가입을 위해 아래 정보를 입력해주세요.</p>
            <Form id={'join'} onSubmit={handleSubmit} initialData={initialData}>
                {/* NOTE: props를 활용하여 테스트 통과하게 만들기 */}
                {/* 처리해야 하는 요소: password, id, name, email */}
                {/* 1. password 빼고 나머지(id(진행중✅), name, email 순서로 1단계를 반복) */}
                {/* 1-1: 테스트 중에 쉬워보이는 것들을 skip을 해체하고, 그걸 통과하게 만들기 */}
                {/* 1-2: 나머지를 통과하게 만들 */}
                {/* 2. password */}
                {({ values, errors, setValues, setErrors }) => {
                    // 과제 step0: props로 setValues, setErrors 함수를 받아오기
                    return (
                        <>
                            <TextField
                                value={values.id}
                                // setValue={(v) =>
                                //     setValues((prev) => ({ ...prev, id: v }))
                                // }
                                setValue={(v) =>
                                    setValues({ ...values, id: v })
                                }
                                // 과제 step1: props로 받아온 setValues 함수 활용
                                error={errors.id}
                                // 과제 step2: props로 받아온 setErrors 함수 활용
                                // setError={(error: FieldError) => {
                                //     setErrors((prev: FormError) => ({
                                //         ...prev,
                                //         id: error,
                                //     }));
                                // }}
                                setError={(err: FieldError) => {
                                    setErrors({ ...errors, id: err });
                                }}
                                name={'id'}
                                type="text"
                                placeholder="아이디"
                                validate={[min(5), max(15)]}
                            />
                            <TextField
                                value={values.name}
                                setValue={(v) =>
                                    setValues({ ...values, name: v })
                                }
                                error={errors.name}
                                setError={(err: FieldError) => {
                                    setErrors({ ...errors, name: err });
                                }}
                                name={'name'}
                                type="text"
                                placeholder="이름"
                                validate={[required]}
                            />
                            <TextField
                                value={values.email}
                                setValue={(v) => {
                                    setValues({ ...values, email: v });
                                }}
                                error={errors.email}
                                setError={(err: FieldError) => {
                                    setErrors({ ...errors, email: err });
                                }}
                                name={'email'}
                                type="text"
                                placeholder="이메일"
                                validate={[required, emailValidation]}
                            />
                            <TextField
                                value={values.password}
                                setValue={(v) => {
                                    setValues({ ...values, password: v });
                                }}
                                error={errors.password}
                                setError={(err: FieldError) => {
                                    setErrors({ ...errors, password: err });
                                }}
                                type="password"
                                name={'password'}
                                placeholder="비밀번호"
                                validate={[required, passwordValidation]}
                            />
                            <TextField
                                value={values['password-confirm']}
                                setValue={(v) => {
                                    setValues({
                                        ...values,
                                        'password-confirm': v,
                                    });
                                }}
                                error={errors['password-confirm']}
                                setError={(err: FieldError) => {
                                    setErrors({
                                        ...errors,
                                        'password-confirm': err,
                                    });
                                }}
                                type="password"
                                name={'password-confirm'}
                                placeholder="비밀번호 확인"
                                validate={[required, match(values.password)]}
                            />
                        </>
                    );
                }}
            </Form>
            <button
                type={'submit'}
                form={'join'}
                style={{
                    width: '300px',
                }}
            >
                제출하기
            </button>
        </div>
    );
}

export default App;
