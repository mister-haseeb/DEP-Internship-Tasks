import React from 'react';
import arrow from '../Assets/arrow.svg';
import right from '../Assets/right.png';
import './hero.css';

export default function Hero() {
  return (
    <div className='hero'>
        <div className="left">
            <h2>New Arrivals</h2>
            <h1>This Week</h1>
            <h1>New Collections</h1>
            <h1>For Everyone</h1>
            <button>Latest Collection <img src={arrow} alt="arrow" /></button>
        </div>
        <div className="right">
            <img className='right-img' src={right} alt="header" />
        </div>
    </div>
  )
}
