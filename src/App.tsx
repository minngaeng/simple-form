import './App.css';
// import TextField from './components/text-field.tsx';
// import Form from './components/form.tsx';

import {
    emailValidation,
    // max,
    // min,
    passwordValidation,
} from './utils';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormSubmit } from './types/index.ts';

function App() {
    const {
        handleSubmit,
        register,
        watch,
        formState: { errors },
    } = useForm<FormSubmit>();
    console.log('errors', errors);
    // const initialData = {
    //     id: '',
    //     password: '',
    //     'password-confirm': '',
    //     name: '',
    //     email: '',
    // };

    const onSubmit: SubmitHandler<FormSubmit> = (data) => {
        console.log(data);
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

            <form id="join" onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    placeholder="아이디"
                    {...register('id', {
                        required: '필수 항목입니다.',
                        minLength: {
                            value: 5,
                            message: '최소 5자 이상 입력해주세요.',
                        },
                        maxLength: {
                            value: 15,
                            message: '최대 15자 이하로 입력해주세요.',
                        },
                    })}
                />
                {errors.id && typeof errors.id.message === 'string' && (
                    <div className="error-message">{errors.id?.message}</div>
                )}
                <input
                    type="password"
                    placeholder="비밀번호"
                    {...register('password', {
                        required: '필수 항목입니다.',
                        validate: (v) =>
                            passwordValidation(v).success ||
                            passwordValidation(v).message,
                    })}
                />
                {errors.password &&
                    typeof errors.password.message === 'string' && (
                        <div className="error-message">
                            {errors.password?.message}
                        </div>
                    )}
                <input
                    type="password"
                    placeholder="비밀번호 확인"
                    {...register('password-confirm', {
                        required: '필수 항목입니다.',
                        validate: (v) =>
                            v === watch('password') ||
                            '비밀번호가 일치하지 않습니다.',
                    })}
                />
                {errors['password-confirm'] && (
                    <div className="error-message">
                        {typeof errors['password-confirm'].message ===
                            'string' && errors['password-confirm']?.message}
                    </div>
                )}
                <input
                    type="text"
                    placeholder="이메일"
                    {...register('email', {
                        required: '필수 항목입니다.',
                        validate: (v) =>
                            emailValidation(v).success ||
                            emailValidation(v).message,
                    })}
                />
                {typeof errors.email?.message === 'string' && (
                    <div className="error-message">{errors.email?.message}</div>
                )}
                <button
                    type={'submit'}
                    form={'join'}
                    style={{
                        width: '300px',
                    }}
                >
                    제출하기
                </button>
            </form>
        </div>
    );
}

export default App;
