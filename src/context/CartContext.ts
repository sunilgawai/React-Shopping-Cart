import { createContext } from 'react';


export type CartType = {
  items: {
    _id?: number
  }
  totalQty: number
}

export type CartContextType = {
  cart: CartType | null
  setCart: React.Dispatch<React.SetStateAction<CartType | null>>
}

export type CartContextProviderProps = {
  children: React.ReactNode
}

export const CartContext = createContext<CartContextType | null>(null)