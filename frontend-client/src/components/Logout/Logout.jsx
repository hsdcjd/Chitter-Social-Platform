import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const Logout = ({ setLoggedIn }) => {
    useEffect(() => {
        setLoggedIn(false);
    }, [setLoggedIn]);

    // this should redirect the user to the home page using the Navigate component
    return <Navigate to="/" replace />;
};

export default Logout;