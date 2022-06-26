import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function Home() {
    const { user, logOut } = useAuth();
    return (
        <div>
            <p>this is the homepage</p>
            <h1>I am {user}</h1>
            {user ? (
                <div>
                    <Link to="/dashboard">
                        <button type="button">Visit Dashboard</button>
                    </Link>
                    <Link to="/products">
                        <button type="button"> Products Page</button>
                    </Link>
                    <button type="button" onClick={() => logOut()}>
                        Logout
                    </button>
                </div>
            ) : (
                <>
                    <Link to="/login">
                        <button type="button"> Login Page</button>
                    </Link>
                    <Link to="/dashboard">
                        <button type="button">Visit Dashboard</button>
                    </Link>
                    <Link to="/products">
                        <button type="button"> Products Page</button>
                    </Link>
                </>
            )}
        </div>
    );
}

export default Home;
