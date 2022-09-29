import { useEffect, useState } from "react";
import Product from "./Product";
import { TypeProduct } from "../types";

const Products = () => {
  useEffect(()=> {
    fetch(api)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProducts(data)
      })
  }, [])
  const api: string = 'http://localhost:4000/api/products';
  const [products, setProducts] = useState<TypeProduct[]>([]);

  return (
    <div className="container grid grid-cols-3 gap-6">
      {
        products.map((item: TypeProduct)=> {
          return <Product key={item._id} product={item} />
        })
      }
    </div>
  )
}

export default Products;