/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import SingleProduct from '../components/SingleProduct';
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
                {products.length === 0
                    ? `Loading........`
                    : products.map((product) => (
                          <div key={Math.random() * 1500}>
                              <SingleProduct product={product} />
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
