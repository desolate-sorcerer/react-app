import { FaUser } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { FaBowlFood } from "react-icons/fa6";
import { Link } from "react-router";
import "./NavBar.css"

function NavBar() {
  return (
    <div className="nav-bar">
      <div className='logo'>
        <Link to="/" ><span className="nav-link"><FaBowlFood /></span></Link>
      </div>
      <div className='links'>
        <Link to="/" style={{ textDecoration: 'none' }}><span className="nav-link">Home</span></Link>
        <span className="nav-link">Books</span>
        <Link to="/chat" style={{ textDecoration: 'none' }}><span className="nav-link">Chat</span></Link>
        <span className="nav-link">About us</span>
      </div>
      <div className="options">
        <span className="nav-link"><FaBasketShopping /></span>
        <Link to="/user"><span className="nav-link"><FaUser /></span></Link>
      </div>
    </div>
  )
}

export default NavBar;
