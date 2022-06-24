import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function Home() {
    const { user, logOut } = useAuth();
    console.log(user);
    return (
        <div>
            <p>this is the homepage</p>
            <h1>I am {user}</h1>
            {user ? (
                <button type="button" onClick={() => logOut()}>
                    Logout
                </button>
            ) : (
                <Link to="/login">
                    <button type="button"> Login Page</button>
                </Link>
            )}
        </div>
    );
}

export default Home;
