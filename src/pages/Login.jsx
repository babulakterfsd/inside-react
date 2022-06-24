import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function Login() {
    const { user, handleUser } = useAuth();
    console.log(user);
    return (
        <div>
            <p>this is the login page</p>
            {!user && (
                <button type="button" onClick={() => handleUser()}>
                    set user
                </button>
            )}
            <Link to="/">
                <button type="button">Back to home</button>
            </Link>
        </div>
    );
}

export default Login;
