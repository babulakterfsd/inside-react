import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Products from '../pages/Products';
import Dashboard from './Dashboard';
import Order from './Order';
import Payment from './Payment';
import PrivateOutlet from './PrivateOutlet';

function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products" element={<PrivateOutlet />}>
                <Route path="/products/:productID" element={<Order />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/*" element={<PrivateOutlet />}>
                <Route path="dashboard" element={<Dashboard />} />
            </Route>
        </Routes>
    );
}

export default AllRoutes;
