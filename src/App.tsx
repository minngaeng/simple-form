import './App.css';
import TextField from './components/text-field.tsx';
import Form from './components/form.tsx';

import {
    // emailValidation,
    // max,
    // min,
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
        name: 'jueun',
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
                {(props) => {
                    <>
                        <TextField
                            type="password"
                            name={'password'}
                            placeholder="비밀번호"
                            validate={[required, passwordValidation]}
                        />
                        <TextField
                            type="password"
                            name={'password-confirm'}
                            placeholder="비밀번호 확인"
                            validate={[required, match('fake password')]}
                        />
                    </>;
                }}
                {/* <TextField
                    name={'id'}
                    type="text"
                    placeholder="아이디"
                    validate={[min(5), max(15)]}
                /> */}
                {/* <TextField
                    name={'name'}
                    type="text"
                    placeholder="이름"
                    validate={[required]}
                />
                <TextField
                    name={'email'}
                    type="text"
                    placeholder="이메일"
                    validate={[required, emailValidation]}
                />
 */}
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
