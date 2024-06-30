import './App.css';
import TextField from './components/text-field.tsx';
import Form from './components/form.tsx';

import {
    emailValidation,
    min,
    max,
    passwordValidation,
    required,
    match,
} from './utils';

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
                {({ values, errors, setFieldError, handleChange }) => {
                    return (
                        <>
                            <TextField
                                value={values.id}
                                onChange={handleChange}
                                error={errors.id}
                                setError={setFieldError('id')}
                                name={'id'}
                                type="text"
                                placeholder="아이디"
                                validate={[min(5), max(15)]}
                            />
                            <TextField
                                value={values.name}
                                onChange={handleChange}
                                error={errors.name}
                                setError={setFieldError('name')}
                                name={'name'}
                                type="text"
                                placeholder="이름"
                                validate={[required]}
                            />
                            <TextField
                                value={values.email}
                                onChange={handleChange}
                                error={errors.email}
                                setError={setFieldError('email')}
                                name={'email'}
                                type="text"
                                placeholder="이메일"
                                validate={[required, emailValidation]}
                            />
                            <TextField
                                value={values.password}
                                onChange={handleChange}
                                error={errors.password}
                                setError={setFieldError('password')}
                                name={'password'}
                                type="password"
                                placeholder="비밀번호"
                                validate={[required, passwordValidation]}
                            />
                            <TextField
                                value={values['password-confirm']}
                                onChange={handleChange}
                                error={errors['password-confirm']}
                                setError={setFieldError('password-confirm')}
                                name={'password-confirm'}
                                type="password"
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
