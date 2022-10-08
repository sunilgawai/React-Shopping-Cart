import { useState, useEffect, createContext, useContext } from 'react';
import Navbar from './components/Navbar';
import Products from './components/Products';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Cart from './pages/Cart';
import { CartContext } from './context/CartContext';
import { CartContextProviderProps, CartType } from './types';

function App() {
  const [cart, setCart] = useState<CartType | null>(null); // { items: {}, totalQty: 0 }
  const ctx = useContext(CartContext);


  useEffect(()=> {
    const _cart = window.localStorage.getItem('cart');
    console.log(_cart)
    if(_cart){
      setCart(JSON.parse(_cart));
    }
  }, [])


  // set cart items when setCart function in called.
  useEffect(() => {
    if (cart != undefined) {
      window.localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart])

  const CartContextProvider = ({ children }: CartContextProviderProps) => {
    return (
      <CartContext.Provider value={{ cart, setCart }}>
        {children}
      </CartContext.Provider>
    )
  }

  return (
    <div className='container mx-auto'>
      <Router>
        <CartContextProvider> 
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </CartContextProvider>
      </Router>
      {/* <Router>
        <CartContext.Provider value={{ cart, setCart }}>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </CartContext.Provider>
      </Router> */}
    </div>
  );
}

export default App;
