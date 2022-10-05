import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Products from './components/Products';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Cart from './pages/Cart';
// import { CartContext } from './context/CartContext';
import { TypeCart } from './types';

function App() {
  
  
  return (
    <div className='container mx-auto'>
      <Router>
        <CartContext.Provider value={null}>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </CartContext.Provider>
      </Router>
    </div>

  );
}

export default App;
