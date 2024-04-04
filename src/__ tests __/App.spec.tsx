import { fireEvent, render } from '@testing-library/react';
import App from '../App.tsx';
import '@testing-library/jest-dom';

test('renders learn react link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/회원가입/i);
    expect(linkElement).toBeInTheDocument();
});

test('id field validation - min', () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    const idInput = getByPlaceholderText('아이디');

    fireEvent.change(idInput, { target: { value: 'test' } });

    const errorMessage = getByText('최소 5자 이상 입력해주세요.');
    expect(errorMessage).toBeInTheDocument();
});

test('id field validation - max', () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    const idInput = getByPlaceholderText('아이디');

    fireEvent.change(idInput, { target: { value: 'very long text for id' } });

    const errorMessage = getByText('최대 15자 이하로 입력해주세요.');
    expect(errorMessage).toBeInTheDocument();
});
