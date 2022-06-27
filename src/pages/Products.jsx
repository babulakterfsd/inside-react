/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function Products() {
    const { user, products } = useAuth();
    return (
        <div>
            <p>This is the Product Gallary</p>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    margin: '30px 25px',
                }}
            >
                {products.map((singleProduct) => (
                    <div key={Math.random() * 1500}>
                        <h3>{singleProduct.title}</h3>
                        <button type="button" onClick={() => console.log(singleProduct?._id)}>
                            Buy
                        </button>
                    </div>
                ))}
            </div>
            <Link to="/">
                <button type="button">Back to home</button>
            </Link>
        </div>
    );
}

export default Products;
