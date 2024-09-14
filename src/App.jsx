import React, { useState } from 'react';
import './App.css'; // Your CSS styles
import Navbar from './Navbar.jsx';
import Footer from './footer.jsx';
import Mid from './mid.jsx';
import Qr from './qr.jsx';
import Suggestions from './suggestions.jsx';

function App() {
  // States for pickup and dropoff location
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [date, setDate] = useState('Today');
  const [time, setTime] = useState('Now');

  // Handle input changes
  const handlePickupChange = (e) => setPickup(e.target.value);
  const handleDropChange = (e) => setDropoff(e.target.value);

  return (
    <>

      <div className='nav'>
        <Navbar />
      </div>

      <br></br>
      <div className='header'>
        <h1>Go anywhere with us</h1>
      </div>


      <div className='buttons'>
        <button className="ride-button">
          <i className="fa fa-car"></i>Ride
        </button>
        <button className="order-button">
          <i className="fa fa-box"></i> Order
        </button>
      </div>

      <div className="ride-container">
        <h2>Book Your Ride</h2>


        <div className="input-group">
          <span className="circle-icon"></span>
          <input
            type="text"
            value={pickup}
            onChange={handlePickupChange}
            placeholder="Enter pickup location"
          />
          <span className="icon-direction"><i className="fas fa-location-arrow"></i></span>
        </div>

        {/* Dropoff Location */}
        <div className="input-group">
          <span className="square-icon"></span>
          <input
            type="text"
            value={dropoff}
            onChange={handleDropChange}
            placeholder="Enter dropoff location"
          />
        </div>

        {/* Date and Time */}
        <div className="date-time-group">
          <div className="date-picker">
            <i className="fas fa-calendar-alt"></i> {date}
          </div>
          <div className="time-picker">
            <i className="fas fa-clock"></i> {time}
          </div>
        </div>

        {/* See Prices Button */}
        <button className="see-prices-button">See prices</button>
      </div>



      <Suggestions />
      <Mid />
      <Qr />
      <Footer />
    </>
  );
}

export default App;
