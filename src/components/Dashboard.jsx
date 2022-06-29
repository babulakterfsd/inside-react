import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function Dashboard() {
    const { user, admin } = useAuth();

    return (
        <div>
            <p>
                This is an {admin ? `Admin` : `User`} Dashboard for {user}
            </p>
            <Link to="/">
                <button type="button">Back to home</button>
            </Link>
        </div>
    );
}

export default Dashboard;
