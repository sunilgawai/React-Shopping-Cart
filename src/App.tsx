import { useState, useEffect, createContext, useContext } from 'react';
import Navbar from './components/Navbar';
import Products from './components/Products';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Cart from './pages/Cart';
import { CartContext, CartContextType, CartContextProviderProps, CartType } from './context/CartContext';

function App() {

  // useEffect(() => {
  //   const data = window.localStorage.getItem('cart');
  //   if (!data) return;
  //   setCart(JSON.parse(data));
  // }, [])

  const CartContextProvider = ({children}: CartContextProviderProps) => {
    const [cart, setCart] = useState<CartType | null>({items:{}, totalQty: 0});
    return (
      <CartContext.Provider value={{cart,setCart}}>
        {children}
      </CartContext.Provider>
    )
  }
  const ctx = useContext(CartContext);
  
  return (
    <div className='container mx-auto'>
      <CartContextProvider>
        <Router>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/products' element={<Products />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
        </Router>
      </CartContextProvider>
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
