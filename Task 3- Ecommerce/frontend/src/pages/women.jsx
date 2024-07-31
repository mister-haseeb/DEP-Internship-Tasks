import React from 'react';
import { Link } from 'react-router-dom';
import all_products from '../components/Assets/products';
import './style.css';

const Women = () => {
  const womenProducts = all_products.filter(product => product.category === 'women');

  return (
    <div className='body'>
      <h1>Women's Products</h1>
      <div className="product-list">
        {womenProducts.length > 0 ? (
          womenProducts.map(product => (
            <div key={product.id} className="person-items">
              {/* Wrapping the entire product card in the Link component */}
              <Link className='info' to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} />
                <h2>{product.name}</h2>
                <p className='new-price'>New Price: ${product.new_price.toFixed(2)}</p>
                <p className='old-price'>Old Price: ${product.old_price.toFixed(2)}</p>
              </Link>
            </div>
          ))
        ) : (
          <p>No products found for men.</p>
        )}
      </div>
    </div>
  );
};

export default Women;
