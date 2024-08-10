import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import HomePage from './components/Home';
import HomePageUs from './components/HomeUs';
import HistogramDashboard from './components/Dashboard';
import AboutUsPage from './components/AboutUs';
import ContactPage from './components/ContactPage';
import SignUP from './components/SignUp';
import ServicePage from './components/ServicePage';
// Ensure correct import path

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Homeus" element={<HomePageUs />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUP />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/dashboard" element={<HistogramDashboard />} />
       
      </Routes>
    </Router>
  );
}

export default App;
