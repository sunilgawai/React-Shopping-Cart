
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

export type TypeCart = {
   items: {
      _id: string
   },
   totalPrice: number
}

export type CartContextState = {
   items: {}
   addCart: (items: {})=> void
}

export const CartContextDefaultValue: CartContextState = {
   items: {},
   addCart: (items: {}) => { }
}