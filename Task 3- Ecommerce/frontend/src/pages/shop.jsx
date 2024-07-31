import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Navbar from '../components/Navbar/navbar';
import Hero from '../components/hero/hero';
import Popular from '../components/popular/popular';
import Offers from '../components/offers/offers';
import Items from '../components/items/items';

export default function Shop() {
  const { products } = useContext(ShopContext);

  return (
    <div>
      <Navbar />
      <Hero />
      <Popular />
      <Offers />
      <Items products={products} />
    </div>
  )
}
