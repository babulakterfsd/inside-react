import React from 'react';
import { Link } from 'react-router-dom';

function Payment() {
    return (
        <div>
            <p>This is the payment page</p>
            <Link to="/" style={{ marginTop: '20px' }}>
                <button type="button">Go Back to home</button>
            </Link>
        </div>
    );
}

export default Payment;
