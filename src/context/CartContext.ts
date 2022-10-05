// import { CartContextDefaultValue } from './../types/index';
import { createContext } from "react";
import { CartContextState, CartContextDefaultValue } from "../types";

// const CartContext = createContext<CartContextState | null>(CartContextDefaultValue);
  // const CartContext = createContext<CartContextState | null>({items:{}, addCart: (items: {})=> {}});


export const CartContext = createContext<CartContextState | null>(CartContextDefaultValue);