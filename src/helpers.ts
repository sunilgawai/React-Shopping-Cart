import { CartType } from "./types";

export const getCart = () => {
   return new Promise((resolve, reject) => {
      const cart = window.localStorage.getItem('cart');
      resolve(cart);
   })
}

export const storeCart = (cart: CartType) => {
   window.localStorage.setItem('cart', JSON.stringify(cart));
}