import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

function Another() {
    const { number, handleNumber } = useAuth();
    return (
        <div
            style={{
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}
            >
                <h1>This is another component</h1>
                <h3>Value of number is {number} </h3>
                <button type="button" onClick={handleNumber}>
                    increase number
                </button>
            </div>
            <div style={{ marginTop: '20px' }}>
                <Link to="/">
                    <button type="button">Back to home</button>
                </Link>
            </div>
        </div>
    );
}

export default Another;
