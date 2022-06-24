import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div>
            <p>Page not found</p>
            <Link to="/">
                <button type="button">Back to home</button>
            </Link>
        </div>
    );
}

export default NotFound;
