/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
import { useEffect, useState } from 'react';
import useFirebase from './useFirebase';

const AllStates = () => {
    const { user, handleGoogleLogin, logOut, isLoading, setIsLoading } = useFirebase();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://cryptic-sea-29383.herokuapp.com/products')
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return { user, handleGoogleLogin, logOut, products, isLoading, setIsLoading };
};

export default AllStates;
