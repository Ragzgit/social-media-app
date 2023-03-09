import { Link } from 'react-router-dom';
import { useContext } from 'react';
import './login.scss';
import { AuthContext } from '../../context/authContext';

function Login() {
    const { login } = useContext(AuthContext);
    const handleLogin = () => {
        login();
    }
    return ( 
        <div className="login">
            <div className="card">
                <div className='left'>
                    <h1>Ragav's App</h1>
                    <p>An awesome Social media application to share your thoughts likes and interests. Register now to use all the great features of the application and start sharing with your friends immediately</p>
                    <Link to="/Register" >
                        <button>Register Now</button>
                    </Link>
                </div>

                <div className='right'>
                    <h1>Login here</h1>
                    <form>
                        <input type="text" placeholder='UserName' />
                        <input type="password" placeholder='Password' />
                        <button onClick={handleLogin}>Login</button>
                    </form>
                    
                </div>

            </div>
        </div>
     );
}

export default Login;