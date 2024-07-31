import React from 'react';
import popular_products from '../popular-data/popular';
import './popular.css';

export default function Popular() {
  return (
    <div className="popular">
      <h2>Popular Products</h2>
      <div className="popular-items">
        {popular_products.map(product => (
          <div className="popular-item" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p><span className="old-price">${product.old_price}</span> <span className="new-price">${product.new_price}</span></p>
          </div>
        ))}
      </div>
    </div>
  )
}
