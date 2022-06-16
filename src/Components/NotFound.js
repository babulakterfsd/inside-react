import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    console.log('NotFound component rendered');
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
                <h1 style={{ marginBottom: '20px', color: 'red' }}>Page Not Found</h1>
            </div>
            <div>
                <Link to="/">
                    <button type="button">Back to home</button>
                </Link>
            </div>
        </div>
    );
}

export default NotFound;
