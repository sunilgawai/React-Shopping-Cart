import {useState} from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Products from './components/Products';
import { TypeCart} from "./types";
import { useEffect } from "react";


function App() {
  const [cart, setCart] = useState<TypeCart>();
  
  useEffect(()=> {
    const cart = window.localStorage.getItem('cart');

    if(!cart) return;

    setCart(JSON.parse(cart));
    console.log(cart);
  })
  return (
    <div className='container mx-auto'>
      
      <Navbar />
      {/* <Header /> */}
      <p className='font-bold text-lg italic'>Products</p>
      <Products />
    </div>

  );
}

export default App;
