import React from 'react'
import { CartContext } from '../context';
import { TypeProduct } from '../types';

const CartItems = () => {
  const ctx = React.useContext(CartContext);
  const items: { [_id: string]: number } | undefined = ctx?.cart?.items;
  const keys = Object.keys({ ...items })
  console.log("keys", keys)

  const [products, setProducts] = React.useState<TypeProduct[]>([]);

  React.useEffect(() => {
    fetch('http://localhost:4000/api/products/cart-items', {
      method: 'POST',
      headers: {
        'Content-Type': 'appication/ json'
      },
      body: JSON.stringify({ ids: keys })
    }).then(res => res.json())
      .then(data => console.log(data))
  }, [])

  return (
    <div>
      <button className='py-1 px-4 bg-yellow-400 font-bold italic mt-6 rounded-lg text-white' onClick={(e) => { }}>Back</button>
      <div className="container  bg-slate-400 py-4 px-32">
        {/* this is here we will map products*/}
        {products.map(product => {
          return (
            <div className="container mx-auto grid grid-cols-3 h-20">
              <div className="flex justify-around items-center">
                <img className='h-20' src="/logo512.png" alt="logo" />
                <p className='font-bold text-xl italic'>something</p>
              </div>
              <div className="flex justify-around items-center">
                <button className='h-8 w-12 flex justify-center items-center bg-red-500 py-1 px-2 rounded-xl font-bold'>+</button>
                <span className='font-bold text-xl italic'>23</span>
                <button className='h-8 w-12 flex justify-center font-bold items-center bg-red-500 py-1 px-2 rounded-xl '>-</button>
              </div>
              <div className="flex justify-around items-center">
                <span className='font-bold text-xl italic'>4512$</span>
                <button className='h-8 w-20 bg-red-600 py-1 px-2 rounded-xl '>Delete</button>
              </div>
            </div>
          )
        })}
        <div className="container mx-auto grid grid-cols-3 h-20">
          <div className="flex justify-around items-center">
            <img className='h-20' src="/logo512.png" alt="logo" />
            <p className='font-bold text-xl italic'>something</p>
          </div>
          <div className="flex justify-around items-center">
            <button className='h-8 w-12 flex justify-center items-center bg-red-500 py-1 px-2 rounded-xl font-bold'>+</button>
            <span className='font-bold text-xl italic'>23</span>
            <button className='h-8 w-12 flex justify-center font-bold items-center bg-red-500 py-1 px-2 rounded-xl '>-</button>
          </div>
          <div className="flex justify-around items-center">
            <span className='font-bold text-xl italic'>4512$</span>
            <button className='h-8 w-20 bg-red-600 py-1 px-2 rounded-xl '>Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems;