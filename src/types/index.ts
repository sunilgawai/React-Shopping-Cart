
export type TypeProduct = {
   createdAt: string
   image: string
   name: string
   price: number
   size: string
   _id: string
}

export type ProductProps = {
   product: TypeProduct
}


export type CartType = {
   items?: {
      [_id: string]: number
   } | undefined
   totalQty?: number | undefined
}

export type CartContextType = {
   cart: CartType | null
   setCart: (cart: CartType | null) => void
   //setCart: React.Dispatch<React.SetStateAction<CartType | null>>
}

export type CartContextProviderProps = {
   children: React.ReactNode
}
