import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Shop from './pages/shop';
import Men from './pages/men';
import Women from './pages/women';
import Kid from './pages/kids';
import Login from './pages/user';
import Signup from './pages/signup';
import Cart from './pages/cart';
import ProductDetail from './pages/ProductDetail'; 
import { ShopProvider } from './context/ShopContext';
import { UserProvider } from './context/UserContext_temp';
import { CartProvider } from './context/CartContext'; 
import ProtectedRoute from './ProtectedRoute';

const App = () => {
  return (
    <Router>
      <ShopProvider>
        <UserProvider>
          <CartProvider>
            <Navbar />
            <Routes>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<ProtectedRoute element={<Shop />} />} />
              <Route path="/men" element={<ProtectedRoute element={<Men />} />} />
              <Route path="/women" element={<ProtectedRoute element={<Women />} />} />
              <Route path="/kids" element={<ProtectedRoute element={<Kid />} />} />
              <Route path="/cart" element={<ProtectedRoute element={<Cart />} />} />
              <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
          </CartProvider>
        </UserProvider>
      </ShopProvider>
    </Router>
  );
};

export default App;
