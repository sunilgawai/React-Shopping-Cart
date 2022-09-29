import { TypeProduct, ProductProps } from "../types/index";

const Product = (props:ProductProps) => {
  const { name, image, size, price, _id } = props.product;

  return (
    <div className="flex flex-col items-center border-blue-400">
      <div className="w-full flex items-center justify-center bg-slate-200">
        <img className="h-40 w-40 mt-2" src={image} alt="shirt" />
      </div>
      <h2 className="font-medium mt-4">{name}</h2>
      <h2 className="font-medium">{size}</h2>
      <div className=" w-full flex justify-around items-center">
        <h1 className="font-medium">{price} $</h1>
        <button className="bg-yellow-500 py-1 px-2 rounded-lg font-medium">Add</button>
      </div>
    </div>
  )
}

export default Product;