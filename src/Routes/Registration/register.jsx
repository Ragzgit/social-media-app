import './register.scss';
import { Link } from "react-router-dom";

function Register() {
    return ( 
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>Ragav Social Media App</h1>
                    <p>An awesome Social media application to share your thoughts likes and interests. Register now to use all the great features of the application and start sharing with your friends immediately</p>
                    <span>Do you have an account?</span>
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Register</h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <input type="text" placeholder="Name" />
                        <button>Register</button>
                    </form>
                </div>
            </div>
        </div>
     );
}

export default Register;