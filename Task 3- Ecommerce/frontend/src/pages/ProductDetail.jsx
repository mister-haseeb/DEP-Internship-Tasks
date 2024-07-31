// src/pages/ProductDetail.jsx
import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import all_products from '../components/Assets/products';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const product = all_products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <p>Product not found!</p>;
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  return (
    <div className="product-detail">
      <button className="back-button" onClick={() => window.history.back()}>&times;</button>
      <img src={product.image} alt={product.name} />
      <div className="detail">
        <h1>{product.name}</h1>
        <p>This is Description</p>
        <p className="new-price">Price: ${product.new_price.toFixed(2)}</p>
        <p className="old-price">Old Price: ${product.old_price.toFixed(2)}</p>
        <input
          className='quantity'
          type="number"
          value={quantity}
          min="1"
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
