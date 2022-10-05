import { cart, logo } from "../images";
import { Link } from "react-router-dom";


const Navbar = () => {


  return (
    <div className="flex justify-between items-center bg-slate-200">
      <img src={logo} alt="logo" />
      <ul className="flex py-4 justify-center items-center">
        <li className="mx-2"><Link to={'/'}>Home</Link></li>
        <li className="mx-2"><Link to={'/products'}>Products</Link></li>
        <li className="mx-2 bg-yellow-600 p-2 text-teal-50 flex"><Link to={'/cart'} className="flex"><span><img className="mr-2" src={cart} alt="cart" /></span> 10</Link></li>
      </ul>
    </div>
  )
}

export default Navbar;