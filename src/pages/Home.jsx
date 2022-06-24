import React from 'react';
import useAuth from '../hooks/useAuth';

function Home() {
    const { user, handleUser } = useAuth();
    return (
        <div>
            <p>this is the homepage</p>
            <h1>I am {user}</h1>
            <button type="button" onClick={() => handleUser()}>
                set user
            </button>
        </div>
    );
}

export default Home;
