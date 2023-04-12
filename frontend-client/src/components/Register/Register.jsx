import { useState } from 'react';
import axios from 'axios';
import env from 'react-dotenv';

const Register = () => {
    const [user, setUser] = useState({
        username: ``,
        name: ``,
        email: ``,
        password: ``
    });

    const handleChange = e => {
        const { name, value } = e.target; // Get the name and value of the input element
        setUser({ // Update the state with the new value
            ...user, //spread the existing user state object
            [name]: value //use the name of input element to dynamically update the corresponding property in the user state object
        });
    }

    const register = async (e) => {
        e.preventDefault();
        const { username, name, email, password } = user;
        if (username && name && email && password) {
            try {
            const res = await axios.post(`${env.REACT_APP_SERVER_BASE_URL}/user`, user)
                alert(res.data.message);
                setUser({ email: ``, password: ``, name: ``, username: `` });
            } catch (error) {
                alert(error.response.data);
            }
            return;
        }
        alert(`Invalid input, fill in all 4 boxes`);
    }

    return (
        <>
            <h3>Create new account</h3>
            {/* <p>
                Already have an account?&nbsp;<Link to="/login">Sign In</Link>
            </p> */}
            <form onSubmit={register}>
                <div className="form-group">
                    <label className="form-label" htmlFor="create-account-name">Full Name:</label>

                    <input type="text" id="create-account-name" name="name" value={user.name} onChange={handleChange}
                           placeholder="Full name" className="form-control"/>

                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="create-account-username">Username:</label>
                    <input type="text"
                           id="create-account-username" name="username" value={user.username} onChange={handleChange}
                           placeholder="Username" className="form-control"/>
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="create-account-email">Email address:</label>
                    <input type="email" id="create-account-email" name="email" value={user.email}
                           onChange={handleChange} placeholder="Email" className="form-control"/>
                </div>
                <div className="form-group">

                    <label className="form-label" htmlFor="create-account-password">Password:</label>
                    <input type="password" id="create-account-password" name="password" value={user.password}
                           onChange={handleChange} placeholder="Password" className="form-control"/>
                </div>
                <button type="submit" className="btn btn-primary">
                    Register
                </button>
            </form>
        </>
    );
}

export default Register;

//this code adpated from Ed's full-stack-engineering/Authenticating/simpleLogin/frontend/src/components/register/Register.jsx