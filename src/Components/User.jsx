import React from 'react';

function User({ user, handleUser }) {
    return (
        <div style={{ marginLeft: '50px' }}>
            <button type="button" onClick={handleUser}>
                set your name
            </button>
            <br />
            <h3>My name is {user} </h3>
        </div>
    );
}

export default User;
