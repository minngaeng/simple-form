import { fireEvent, render } from '@testing-library/react';
import App from '../App.tsx';
import '@testing-library/jest-dom';

test.skip('id field validation - min', () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    const idInput = getByPlaceholderText('아이디');

    fireEvent.change(idInput, { target: { value: '1234' } });

    const errorMessage = getByText('최소 5자 이상 입력해주세요.');
    expect(errorMessage).toBeInTheDocument();
});

test.skip('id field validation - max', () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    const idInput = getByPlaceholderText('아이디');

    fireEvent.change(idInput, { target: { value: 'This is over 15!' } });

    const errorMessage = getByText('최대 15자 이하로 입력해주세요.');
    expect(errorMessage).toBeInTheDocument();
});
