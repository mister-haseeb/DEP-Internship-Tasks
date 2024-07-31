import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext_temp'; // Import UserContext
import './user.css';

const User = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook for navigation
  const { login } = useContext(UserContext); // Use UserContext to manage login state

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', {
        email,
        password
      });

      if (response.status === 200) {
        // Assuming the response contains user data
        login(response.data); // Update context with user data
        // Redirect to home page
        navigate('/');
      } else {
        setError('Failed to login. Check your credentials and try again.');
      }
    } catch (error) {
      console.error('Failed to login:', error.response ? error.response.data : error.message);
      setError('Failed to login. Check your credentials and try again.');
    }
  };

  return (
    <div className='login-container'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <div>
        <label htmlFor="username">Email:</label>
        <input
          type="email"
          id= "email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        </div>
        <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        </div>
        <button className='login-button' type="submit">Login</button>
        {error && <p>{error}</p>}
        <div className="signup-link">Don't Have an Account?
          <button className='signlog-button' type="button" onClick={() => window.location.href='/signup'}>Sign up</button>
        </div>
      </form>
    </div>
  );
};

export default User;
