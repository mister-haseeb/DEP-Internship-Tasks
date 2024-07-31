import React from 'react';
import popular_products from '../popular-data/popular';
import './items.css';

export default function Items() {
  return (
    <div className="items">
        {popular_products.map((product) => (
            <div className="item" key={product.id}>
                <img src={product.image} alt={product.name} />
                <div className="details">
                    <h2>{product.name}</h2>
                    <p><span className="old-price">${product.old_price}</span> <span className="new-price">${product.new_price}</span></p>
                </div>
            </div>
        ))}
    </div>
  )
}
