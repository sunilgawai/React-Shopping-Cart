import React from 'react'
import Header from '../components/Header';
import Products from '../components/Products';
import { CartContext } from '../context';

const Home = () => {
  return (
    <div>
      {/* <Header /> */}
      <Products />
    </div>
  )
}

export default Home;