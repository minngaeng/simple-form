import './App.css'
import TextField from "./components/text-field.tsx";

function App() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            alignItems: 'center'
        }}>
            <h1>회원가입</h1>
            <p>회원가입을 위해 아래 정보를 입력해주세요.</p>
            <form id={'join'} onSubmit={handleSubmit}>
                <TextField name={'id'} type="text" placeholder="아이디" validate={[]}/>
                <TextField name={'password'} type="password" placeholder="비밀번호" validate={[]}/>
                <TextField name={'password-confirm'} type="password" placeholder="비밀번호 확인"/>
                <TextField name={'name'} type="text" placeholder="이름"/>
                <TextField name={'email'} type="text" placeholder="이메일"/>
            </form>
            <button type={'submit'} form={'join'} style={{
                width: '300px',
            }}>제출하기
            </button>
        </div>
    )
}

export default App
