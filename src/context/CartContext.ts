import { createContext } from 'react';
import { CartContextType, CartContextProviderProps } from '../types';

export const CartContext = createContext<CartContextType | null>(null)
