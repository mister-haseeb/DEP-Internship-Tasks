import React from 'react';
import shirt from '../Assets/offers_data/shirts.png';
import './offers.css';

export default function Offers() {
  return (
    <div className="offers">
        <div className="offer">
            <img src={shirt} alt="Shirt" />
            <div className="offer-details">
                <h2>Flat 50% Off</h2>
                <p>On all shirts</p>
            </div>
        </div>
    </div>
  )
}
