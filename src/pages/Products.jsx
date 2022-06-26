import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function Products() {
    const { user } = useAuth();
    console.log(user);
    return (
        <div>
            <p>This is the Product Gallary</p>
            <Link to="/">
                <button type="button">Back to home</button>
            </Link>
        </div>
    );
}

export default Products;
