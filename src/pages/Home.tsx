import React, { useContext, useEffect } from 'react'
import Products from '../components/Products';
import { CartContext, CartType } from '../context';

const Home = () => {
  const ctx = useContext(CartContext);

  useEffect(()=> {
    const data: CartType | null | string = window.localStorage.getItem('cart');
    // @ts-ignore
    ctx?.setCart(JSON.parse(data))
  }, [])

  useEffect(() => {
    // @ts-ignore
    window.localStorage.setItem('cart', JSON.stringify(ctx?.cart));
    // @ts-ignore
    // ctx?.setCart(JSON.parse(data))
  }, [ctx?.cart])


  return (
    <div>
      <Products />
    </div>
  )
}

export default Home;