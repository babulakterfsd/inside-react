import React from 'react';
import { Link } from 'react-router-dom';

function Another() {
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
            <div>
                <h1 style={{ marginBottom: '20px' }}>This is another component</h1>
            </div>
            <div>
                <Link to="/">
                    <button type="button">Back to home</button>
                </Link>
            </div>
        </div>
    );
}

export default Another;
