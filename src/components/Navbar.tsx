import { cart, logo } from "../images";


const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-slate-200">
      <img src={logo} alt="logo" />
      <ul className="flex py-4 justify-center items-center">
        <li className="mx-2">Home</li>
        <li className="mx-2">Products</li>
        <li className="mx-2 bg-yellow-600 p-2 text-teal-50 flex"><span><img className="mr-2" src={cart} alt="cart" /></span> 10</li>
      </ul>
    </div>
  )
}

export default Navbar;