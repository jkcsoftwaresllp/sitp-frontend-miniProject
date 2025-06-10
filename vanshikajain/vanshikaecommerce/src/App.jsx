import React, { useState } from 'react';
import Navbar from "./components/Navbar/Navbar";
import Product from "./pages/Product";
import './App.css';
import Cart from './pages/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prev => [...prev, product]);
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div>
      {/* <Navbar cartCount={cartItems.length} /> */}
      <Navbar cartItems={cartItems} removeFromCart={removeFromCart} />

      <Product addToCart={addToCart} cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
}
export default App;




