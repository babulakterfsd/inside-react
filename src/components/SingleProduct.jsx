/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Link } from 'react-router-dom';

function SingleProduct({ product }) {
    return (
        <div>
            <h3>{product.title}</h3>
            <Link to={product._id} state={product}>
                <button type="button">Buy</button>
            </Link>
        </div>
    );
}

export default SingleProduct;
