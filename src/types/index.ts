
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

export type TypeCartContext = {
   items: {
      _id: string
   }
   totalQty: number
}