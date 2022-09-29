import { shirtImg } from "../images";


const Header = () => {
  return (
    <div className="flex justify-around items-center container my-10">
      <div>
           <h1 className="text-2xl font-medium italic">Looking for a T Shirt ?</h1>
         <h3 className="font-bold italic text-xl">Order Now...</h3>
      </div>
      <img className=" h-80" src={shirtImg} alt="shirt" />
    </div>
  )
}

export default Header;