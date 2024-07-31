// src/pages/Cart.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './cart.css';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const totalPrice = cart.reduce((total, item) => total + (item.new_price * item.quantity), 0);

  return (
    <div className="cart-body">
      <div className="cart-container">
        
      
      <div className="cart-header">
        <h1>Cart</h1>
        <p className="total">Total Price: ${totalPrice.toFixed(2)}</p>
      </div>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-info">
                <h2>{item.name}</h2>
                <p>Price: ${item.new_price.toFixed(2)}</p>
              </div>
              <div className="cart-item-price">
                <p className="cart-item-quantity">Quantity: {item.quantity}</p>
                <p className="cart-item-total">Total: ${(item.new_price * item.quantity).toFixed(2)}</p>
                <button className="cart-item-remove" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="cart-checkout">
      <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
      <button className="buy-now">Buy Now</button> 
      </div>

    </div>
    </div>
  );
};

export default Cart;
