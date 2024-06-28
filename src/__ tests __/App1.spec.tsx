import { fireEvent, render } from '@testing-library/react';
import App from '../App.tsx';
import '@testing-library/jest-dom';

test('id field validation - min', () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    const idInput = getByPlaceholderText('아이디');

    fireEvent.change(idInput, { target: { value: '1234' } });

    const errorMessage = getByText('최소 5자 이상 입력해주세요.');
    expect(errorMessage).toBeInTheDocument();
});

test('id field validation - max', () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    const idInput = getByPlaceholderText('아이디');

    fireEvent.change(idInput, { target: { value: 'This is over 15!' } });

    const errorMessage = getByText('최대 15자 이하로 입력해주세요.');
    expect(errorMessage).toBeInTheDocument();
});

test('name field exists', () => {
    const { getByPlaceholderText } = render(<App />);
    const nameInput = getByPlaceholderText('이름');

    expect(nameInput).toBeInTheDocument();
});

test.skip('email field exists', () => {
    const { getByPlaceholderText } = render(<App />);
    const emailInput = getByPlaceholderText('이메일');

    expect(emailInput).toBeInTheDocument();
});

test.skip('password-confirm field exists', () => {
    const { getByPlaceholderText } = render(<App />);
    const passwordConfirmInput = getByPlaceholderText('비밀번호 확인');

    expect(passwordConfirmInput).toBeInTheDocument();
});
