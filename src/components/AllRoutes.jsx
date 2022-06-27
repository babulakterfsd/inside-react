import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Products from '../pages/Products';
import Dashboard from './Dashboard';
import PrivateOutlet from './PrivateOutlet';

function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" />} />
            <Route path="/products" element={<Products />} />
            <Route path="login" element={<Login />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/*" element={<PrivateOutlet />}>
                {/* I can place multiple private components here.. like products component under the dashboard in the same way to make it private. */}
                <Route path="dashboard" element={<Dashboard />} />
            </Route>
        </Routes>
    );
}

export default AllRoutes;
