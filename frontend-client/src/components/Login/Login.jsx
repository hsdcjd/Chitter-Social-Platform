import {useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import env from "react-dotenv";


const Login = ({setLoginUser, setLoggedIn}) => {
    const [user, setUser] = useState({
        username: ``,
        password: ``
    });

    const navigate = useNavigate();

    const handleChange = e => {
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const login = async (e) => {
        e.preventDefault();
        const res = await axios.post(`${env.REACT_APP_SERVER_BASE_URL}/user/login`, user);   //need to sort this route out

        setLoginUser(res.data.user);
        setUser({username: ``, password: ``});
        if (res.data.user) {
            setLoggedIn(true);
            navigate('/', { replace: true });
        }
    }

    return (
        <>
            <h3>Log in to your account</h3>
            <form onSubmit={login}>
                <div className="form-group">
                    <label htmlFor="sign-in-username" className="form-label">Your username:</label>
                    <input type="text" id="sign-in-username" name="username" value={user.username}
                           onChange={handleChange} autoComplete="username" className="form-control"
                           placeholder="Your username"/>
                </div>
                <div className="form-group">
                    <label htmlFor="sign-in-password" className="form-label">Your password:</label>

                    <input type="password" id="sign-in-password" name="password" value={user.password} className="form-control"
                           onChange={handleChange} placeholder="Your password" autoComplete="current-password"/>
                </div>
                <input type="submit" value="Login" className="btn btn-primary"/>
            </form>

        </>
    )
}

export default Login;

//this code adpated from Ed's full-stack-engineering/Authenticating/simpleLogin/frontend/src/components/login/Login.jsx