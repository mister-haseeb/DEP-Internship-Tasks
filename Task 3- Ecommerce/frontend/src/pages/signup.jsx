import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './user.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/signup', {
        name,
        email,
        password,
      });
      if (response.status === 201) {
        console.log('User signed up successfully');
        navigate('/login');
      }
    } catch (err) {
      setError('Failed to signup, please try again');
    }
  };

  return (
    <div className="login-container">
      <h1>Signup</h1>
      <form onSubmit={handleSubmit} className="login-form">
        
        <div>
        <label htmlFor="signup-username">Name:</label>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        </div>
        <div>
        <label htmlFor="signup-username">Email:</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        </div>
        <div>
        <label htmlFor="signup-password">Password:</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        </div>
        <button className='login-button' type="submit">Signup</button>
        {error && <p>{error}</p>}
        <div className="signup-link">Already have an account?
          <button 
            className='signlog-button' 
            type="button" 
            onClick={() => window.location.href='/login'}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;