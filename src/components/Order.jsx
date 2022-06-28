/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function Order() {
    const { productID } = useParams();

    const [orderedProduct, setOrderedProduct] = useState({});
    const { title, price, description, img } = orderedProduct;

    useEffect(() => {
        fetch(`https://cryptic-sea-29383.herokuapp.com/products/${productID}`)
            .then((res) => res.json())
            .then((data) => setOrderedProduct(data));
    }, [productID]);

    return (
        <div
            style={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            <div
                style={{
                    height: 'auto',
                    width: '420px',
                    padding: '8px 15px',
                    boxShadow: '2px 4px 8px',
                }}
            >
                <img
                    src={img}
                    alt="product"
                    style={{ height: '150px', width: '100%', objectFit: 'cover' }}
                />
                <h3>{title}</h3>
                <p>{description}</p>
                <div style={{ display: 'flex', justifyContent: 'center', padding: '10px 0px' }}>
                    <Link to="/products" style={{ marginRight: '50px' }}>
                        <button type="button">See another product</button>
                    </Link>
                    <Link to="/payment">
                        <button type="button">confirm order</button>
                    </Link>
                </div>
            </div>

            <Link to="/" style={{ marginTop: '20px' }}>
                <button type="button">Back to home</button>
            </Link>
        </div>
    );
}

export default Order;
