import { TypeCart } from './../types/index';

import { type } from "os";
import { createContext } from "react";

// import { TypeCartContext } from "../types";

export type Cart = {
   items: {
      _id: string;
   }
   totalQty: number;
}

export type CartContextType = {
   cart: Cart | null
   setCart: (cart: Cart) => void
}
//<CartContextType | null>
interface CartProviderProp {
   cart: TypeCart
   setCart: (cart: TypeCart) => void
}

//<CartProviderProp | null >
// export const CartContext = createContext(null);