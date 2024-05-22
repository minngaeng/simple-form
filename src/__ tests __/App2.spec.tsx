import { fireEvent, render } from '@testing-library/react';
import App from '../App.tsx';
import '@testing-library/jest-dom';

// TODO: 아래 테스트를 통과하도록 name field validation을 구현하세요.
test.skip('name field validation - required', () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    const nameInput = getByPlaceholderText('이름');

    fireEvent.change(nameInput, { target: { value: 'abc' } }); // write something
    fireEvent.change(nameInput, { target: { value: '' } }); // remove text

    const errorMessage = getByText('값을 입력해주세요.');
    expect(errorMessage).toBeInTheDocument();
});

// TODO: email field validation 테스트를 만족하도록 구현하세요.
// 이메일 주소는 일반적으로 다음과 같은 형식을 따릅니다:
//     - [로컬파트]@[도메인명].[최상위도메인]
//     - ex) test@example.com
// 로컬파트 (Local Part): @ 기호 앞에 위치하며, 실제 사용자 계정을 나타냅니다. 글자, 숫자, 마침표(.), 하이픈(-), 밑줄(_) 등을 포함할 수 있습니다. 예를 들어, "test"가 로컬파트입니다.
// @ 기호: 로컬파트와 도메인명을 구분하는 기호입니다.
// 도메인명 (Domain Name): @ 기호 뒤에 위치하며, 이메일 서비스를 제공하는 서버를 나타냅니다. 예를 들어, "example"가 도메인명입니다.
// 최상위도메인 (Top-Level Domain, TLD): 도메인명 뒤에 마침표(.)로 구분되어 나타나며, 도메인의 목적과 종류를 나타냅니다. 국가코드최상위도메인(ccTLD)과 일반최상위도메인(gTLD)이 있습니다. 예를 들어, "com"은 상업용 gTLD입니다.

test.skip('email field validation - invalid local part', () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    const emailInput = getByPlaceholderText('이메일');

    fireEvent.change(emailInput, { target: { value: 'test#@example.com' } });

    const errorMessage = getByText('이메일 형식에 맞게 입력해주세요.');
    expect(errorMessage).toBeInTheDocument();
});

test.skip('email field validation - missing @', () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    const emailInput = getByPlaceholderText('이메일');

    fireEvent.change(emailInput, { target: { value: 'testexample.com' } });

    const errorMessage = getByText('이메일 형식에 맞게 입력해주세요.');
    expect(errorMessage).toBeInTheDocument();
});

test.skip('email field validation - invalid domain name', () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    const emailInput = getByPlaceholderText('이메일');

    fireEvent.change(emailInput, { target: { value: 'test@example#.com' } });

    const errorMessage = getByText('이메일 형식에 맞게 입력해주세요.');
    expect(errorMessage).toBeInTheDocument();
});

// TODO: 위 email validation 테스트에서 빠진 엣지 케이스가 있는지 생각해보고 가능하면 추가해보세요.
