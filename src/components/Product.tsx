import { TypeProduct, ProductProps, TypeCart } from "../types/index";
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Product: React.FC<ProductProps> = (props: ProductProps) => {
  const { name, image, size, price, _id } = props.product;
  const buttonStyle: React.CSSProperties = {

  }
  const ctx = useContext(CartContext)
  console.log('product comp getting ctx', ctx);
  let cart, setCart;
  if(ctx?.cart){
    cart = ctx.cart;
  }
  if(ctx?.addCart){
    setCart = setCart;
  }
  console.log('cart data from product comp,', cart);
  console.log('setCart from product comp,', setCart);

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, _id: string) => {
    console.warn(_id);
    // const cart: TypeCart = {
    //   items: {
    //     _id: 4
    //   },
    //   totalPrice: 40
    // }
    const _cart: TypeCart = {
      items: {
        key: 0
      },
      totalQty: 0
    };
    

    console.log('from cart', _cart)

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
        <button onClick={(e) => handleAddToCart(e, _id)} style={buttonStyle} className="bg-yellow-500 text-white py-1 px-4 rounded-lg font-medium">Add</button>
      </div>
    </div>
  )
}

export default Product;