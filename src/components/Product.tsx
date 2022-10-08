import { ProductProps } from "../types/index";
import React, { useContext } from "react";
import { CartContext } from "../context";


const Product: React.FC<ProductProps> = (props: ProductProps) => {

  const { name, image, size, price, _id } = props.product;
  const ctx = useContext(CartContext);
  
  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, _id: string) => {
    e.preventDefault();
    // e.stopPropagation();
    const _cart = {...ctx?.cart};
    if(!_cart.items){
      _cart.items = {};
    }
    if (!_cart.totalQty) {
      _cart.totalQty = 0;
    }
    //@ts-ignore
    if(!_cart.items[_id]){
      //@ts-ignore
      _cart.items[_id] = 1;
    }else{
      //@ts-ignore
      _cart.items[_id] += 1;
    }

    //@ts-ignore
    _cart.totalQty = _cart.totalQty + 1;

    // adding to setCart()
    ctx?.setCart(_cart);
    // console.log('local cart', _cart)
  }

  return (
    <div className="flex flex-col items-center border-blue-400 mt-8">
      <div className="w-full flex items-center justify-center bg-slate-200">
        <img className="h-40 w-40 mt-2" src={image} alt="shirt" />
      </div>
      <h2 className="font-medium mt-4">{name}</h2>
      <h2 className="font-medium">{size}</h2>
      <div className=" w-full flex justify-around items-center">
        <h1 className="font-medium">{price} $</h1>
        <button type="button" onClick={(e) => handleAddToCart(e, _id)} className="bg-yellow-500 text-white py-1 px-4 rounded-lg font-medium">Add</button>
      </div>
    </div>
  )
}

export default Product;