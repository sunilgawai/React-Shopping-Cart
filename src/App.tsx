import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Products from './components/Products';


function App() {
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
