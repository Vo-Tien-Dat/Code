
import './Login.scss';
import { Container } from 'react-bootstrap';
function Login() {
    return (
        <Container className='fullpage' fluid>
            <Container style={{
                width: '25%',
                top: '50%',
                left: '50%'
            }} className='login-form'>
                <Container className="login-brand">
                    <h4>Code</h4>
                </Container>
                <Container style={{
                }} className='login-form-input'>
                    <input type="text" className='login-input' placeholder='Username or email' />
                    <input type="pass" className='login-input' placeholder='Password' />
                </Container>
                <Container className='login-form-submit'>
                    <button className='submit'> Đăng nhập </button>
                </Container>
            </Container>
        </Container>
    )
}

export default Login;