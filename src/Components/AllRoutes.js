import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Another from '../Pages/Another';
import Home from '../Pages/Home';
import NotFound from './NotFound';

function AllRoutes() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                /> */}
                <Route path="/another" element={<Another />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default AllRoutes;
