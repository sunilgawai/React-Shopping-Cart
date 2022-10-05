import { useState, useEffect, createContext } from 'react';
import Navbar from './components/Navbar';
import Products from './components/Products';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Cart from './pages/Cart';
import { CartContextDefaultValue} from './types';
import { CartContext } from './context/CartContext';

function App() {

  const [cart, setCart] = useState({});

  useEffect(()=> {
    const data = window.localStorage.getItem('cart');
    if(!data) return;
    setCart(JSON.parse(data));
  }, [])
  console.log('cart init', cart)
  
  return (
    <div className='container mx-auto'>
      <Router>
        <CartContext.Provider value={CartContextDefaultValue}>
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
