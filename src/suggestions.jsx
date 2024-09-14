import React from 'react';
import './Suggestions.css';

const Suggestions = () => {
    return (
        <div className="suggestions-container">
            <h1>Suggestions</h1>
            <div className="cards">
                <div className="card">
                    <h2>Ride</h2>
                    <p>Go anywhere with Uber. Request a ride, hop in, and go.</p>
                    <button className="details-button">Details</button>
                </div>
                <div className="card">
                    <h2>Reserve</h2>
                    <p>Reserve your ride in advance so you can relax on the day of your trip.</p>
                    <button className="details-button">Details</button>
                </div>
                <div className="card">

                    <h2>Package</h2>
                    <p>Uber Connect makes same-day delivery easier than ever.</p>
                    <button className="details-button">Details</button>
                </div>
            </div>
        </div>
    );
};

export default Suggestions;
