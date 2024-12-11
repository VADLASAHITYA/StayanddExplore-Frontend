import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'; // Assuming you have a CSS file for styling the sidebar

const GuideDashboard = () => {
    return (
      <div className="dashboard-container">
      <nav className="navbar">
        <h2>Guide Dashboard</h2>
        
                <ul>
                    <li>
                        <Link to="/guide/insights">Tourism Insights</Link>
                    </li>
                    <li>
                        <Link to="/guide/selectguide">Guide Details</Link>
                    </li>
                    
                   
                    <li>
                        <Link to="/logout">Logout</Link>
                    </li>
                </ul>
            </nav>
            <main className="dashboard-content">
                <h1>Welcome, Local Guide!</h1>
                <p>Select an option from the sidebar to get started.</p>
                {/* Additional content or components can be rendered here based on the selected route */}
            </main>
        </div>
    );
};

export default GuideDashboard;
