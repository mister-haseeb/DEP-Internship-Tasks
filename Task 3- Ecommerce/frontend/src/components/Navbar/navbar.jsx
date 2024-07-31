// src/components/Navbar/navbar.jsx
import React, { useContext } from 'react';
import './navbar.css';
import logo from '../Assets/logo.png';
import Cart from '../Assets/icons_323881.svg';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext_temp';
import { CartContext } from '../../context/CartContext'; // Import CartContext

export default function Navbar() {
  const { user, logout } = useContext(UserContext);
  const { cart } = useContext(CartContext); // Use CartContext to get cart items

  const handleLogout = () => {
    // Show confirmation dialog
    const confirmLogout = window.confirm('Do you want to logout?');
    
    if (confirmLogout) {
      logout(); // Call logout function from context
      // Optionally, you can redirect or perform any additional actions here
    }
  };

  return (
    <div className="navbar">
      <div className="store-logo">
        <Link className='menu-item' to="/"><img className="logo" src={logo} alt="logo" /></Link>
      </div>
      <ul className="menu">
        <li><Link className='menu-item' to="/">Shop</Link><hr /></li>
        <li><Link className='menu-item' to="/men">Men</Link><hr /></li>
        <li><Link className='menu-item' to="/women">Women</Link><hr /></li>
        <li><Link className='menu-item' to="/kids">Kids</Link><hr /></li>
      </ul>
      <div className="login">
        {user ? (
          <>
            <button onClick={handleLogout}>Logout</button>
            <Link className='menu-item' to="/cart">
              <div className="cart">
                <img src={Cart} alt="cart" />
                <div className="cart-count">{cart.length}</div> {/* Display cart count */}
              </div>
            </Link>
          </>
        ) : (
          <Link to="/login"><button>Login</button></Link>
        )}
      </div>
    </div>
  );
}
