import './App.css';
import TextField from './components/text-field.tsx';
import Form from './components/form.tsx';

import {
    emailValidation,
    min,
    max,
    // passwordValidation,
    required,
    // match,
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
                {/* TODO: 2. props를 활용하여 테스트 통과하게 만들기 */}
                {({ values, errors, setValues, setErrors }) => {
                    // 과제 step0: props로 setValues, setErrors 함수를 받아오기
                    return (
                        <>
                            <TextField
                                value={values.id}
                                // 과제 step1: props로 받아온 setValues 함수 활용
                                setValue={(v) => {
                                    setValues({ ...values, id: v });
                                }}
                                error={errors.id}
                                // 과제 step2: props로 받아온 setErrors 함수 활용
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
                                setValue={(v) => {
                                    setValues({ ...values, name: v });
                                }}
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
                        </>
                    );
                }}

                {/* TODO: create TextField for name, email and password confirm*/}
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
