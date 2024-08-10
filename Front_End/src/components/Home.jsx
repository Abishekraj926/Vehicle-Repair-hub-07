import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Home.css';
import right_img from '../assets/right_img.png';
import left_img from '../assets/left_img.jpg';
import tempo from '../assets/tempo.webp';
import van from '../assets/van.jpg';
import auto from '../assets/auto.avif';
import water from '../assets/water.jpeg';
import { FaUser, FaMapMarkerAlt } from 'react-icons/fa';

const overlayContents = [
  "Bike repair.....................................................Is your bike making strange noises? It might be time for a check-up. Schedule an appointment today! #carrepair #automaintenance #carsofinstagram",
  "Car problem.........................................................Keep your car running smoothly with our maintenance services. Book an appointment now! #carservice #autorepair",
  "Tempo fault........................................................Ensure your tempo is in top condition. Schedule a maintenance check with us! #autorepair #carcare",
  "Van repair........................................................Your van deserves the best care. Visit us for top-notch van repair services. #vanrepair #autoworkshop",
  "Auto rider........................................................Need a ride? We offer the best auto repair services. Get in touch today! #autoshop #carrepair",
  "Water Wash........................................................Stay hydrated and keep your car cool with our radiator services. #carcooling #radiatorrepair"
];

const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { username } = location.state || { username: 'Account' };
  const [activeIndex, setActiveIndex] = useState(null);

  const handleLogout = () => {
    navigate('/login');
  };

  const handleLocationChange = (location) => {
    console.log(`Selected location: ${location}`);
  };

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="home-container">
      <nav className="navbar">
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/service">Services</a></li>          
          <li><a href="/aboutus">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/dashboard">Dashboard </a></li>
        </ul>
        <ul className="right-buttons">
          <li className="location-dropdown">
            <FaMapMarkerAlt />
            <select onChange={(e) => handleLocationChange(e.target.value)}>
              <option value="Chennai">Chennai</option>
              <option value="Coimbatore">Coimbatore</option>
            </select>
          </li>
          <li><button><FaUser /> {username}</button></li>
          <li><button onClick={handleLogout}>Login/Logout</button></li>
        </ul>
      </nav>
      <div className="content">
        <h1>Welcome to the Automobile Workshop</h1>
      </div>
      <div className="image-grid">
        {[right_img, left_img, tempo, van, auto, water].map((img, index) => (
          <div
            key={index}
            className={`image-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
            <img src={img} alt={`Image ${index + 1}`} />
            <div className="overlay">
              <p>{overlayContents[index]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
