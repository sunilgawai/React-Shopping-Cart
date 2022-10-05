
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
   },
   totalQty: number
}

export type CartContextState = {
   cart: {}
   addCart: (items: {})=> void
}

export const CartContextDefaultValue: CartContextState = {
   cart: {},
   addCart: (items: {}) => { }
}