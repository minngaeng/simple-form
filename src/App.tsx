import React from 'react';
import './App.css';
import TextField from './components/text-field.tsx';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { emailValidation, passwordValidation } from './utils';

const App = () => {
    const initialData = {
        id: '',
        password: '',
        'password-confirm': '',
        name: '',
        email: '',
    };

    // Yup validation schema
    const validationSchema = Yup.object({
        id: Yup.string()
            .min(5, '최소 5자 이상 입력해주세요.')
            .max(15, '최대 15자 이하로 입력해주세요.')
            .required('아이디는 필수 입력 항목입니다.'),
        password: Yup.string()
            .required('비밀번호는 필수 입력 항목입니다.')
            .test(
                'isValidPassword',
                '비밀번호는 영문 숫자를 혼합한 8자리 이상이어야 합니다.',
                (v: string) => passwordValidation(v).success
            ),
        'password-confirm': Yup.string()
            .oneOf(
                [
                    Yup.ref('password'),
                    // , null
                ],
                '비밀번호가 일치하지 않습니다.'
            )
            .required('비밀번호 확인은 필수 입력 항목입니다.'),
        name: Yup.string().required('이름은 필수 입력 항목입니다.'),
        email: Yup.string()
            .email('이메일 형식에 맞게 입력해주세요.')
            .required('이메일은 필수 입력 항목입니다.'),
    });

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

            <Formik
                initialValues={initialData}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting }) => (
                    <Form id="join">
                        <TextField name="id" type="text" placeholder="아이디" />
                        <TextField
                            name="password"
                            type="password"
                            placeholder="비밀번호"
                        />
                        <TextField
                            name="password-confirm"
                            type="password"
                            placeholder="비밀번호 확인"
                        />
                        <TextField name="name" type="text" placeholder="이름" />
                        <TextField
                            name="email"
                            type="text"
                            placeholder="이메일"
                        />

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            style={{ width: '300px' }}
                        >
                            제출하기
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default App;
