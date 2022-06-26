import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
    return (
        <div>
            <p>This is the dashboard</p>
            <Link to="/">
                <button type="button">Back to home</button>
            </Link>
        </div>
    );
}

export default Dashboard;
