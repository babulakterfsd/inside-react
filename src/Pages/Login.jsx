import React from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function Login() {
    const { user, handleGoogleLogin } = useAuth();
    const location = useLocation();
    const targetURL = location.state || '/dashboard';

    return (
        <div>
            <p>this is the login page</p>
            {!user ? (
                <button type="button" onClick={() => handleGoogleLogin()}>
                    Login with Google
                </button>
            ) : (
                <Navigate to={`${targetURL}`} replace />
            )}
            <Link to="/">
                <button type="button">Back to home</button>
            </Link>
        </div>
    );
}

export default Login;
