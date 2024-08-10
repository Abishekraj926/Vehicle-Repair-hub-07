import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'Abishek' && password === '12345') {
      navigate('/home', { state: { username } });
    } else if (username && password) {
      navigate('/homeus', { state: { username } });
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-page">
      <nav className="navbar">
        <div className="navbar-logo">Automobile Workshop</div>
        <ul className="navbar-links">
          <li><a href="#">Home</a></li>
          <li><a href="/aboutus">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
          <div className='new'>
             <a href='./register'>New To WorkShop?</a>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
