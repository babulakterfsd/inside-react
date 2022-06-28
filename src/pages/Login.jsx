import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function Login() {
    const { user, handleGoogleLogin } = useAuth();

    return (
        <div>
            <p>this is the login page</p>
            {!user ? (
                <button type="button" onClick={() => handleGoogleLogin()}>
                    Login with Google
                </button>
            ) : // <Navigate to="/" state={{ from: location }} />
            null}
            <Link to="/">
                <button type="button">Back to home</button>
            </Link>
        </div>
    );
}

export default Login;
