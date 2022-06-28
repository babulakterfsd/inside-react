/* eslint-disable no-underscore-dangle */
import React from 'react';

function SingleProduct({ product }) {
    return (
        <div>
            <h3>{product.title}</h3>
            <button type="button" onClick={() => console.log(product?._id)}>
                Buy
            </button>
        </div>
    );
}

export default SingleProduct;
