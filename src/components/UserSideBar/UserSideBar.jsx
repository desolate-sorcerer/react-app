import { Link } from "react-router"
import "./UserSideBar.css"
import { FaRegUser } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa";

function SideBar() {
  return (
    <div className="user-side-bar">
      <Link to="/" style={{ textDecoration: 'none' }}><div className="user-link"><FaRegComments /> Community</div></Link>
      <Link to="/" style={{ textDecoration: 'none' }}><div className="user-link"><FaRegMessage /> Messages</div></Link>
      <Link to="/" style={{ textDecoration: 'none' }}><div className="user-link"><FaRegBell /> Notfications</div></Link>
      <Link to="/" style={{ textDecoration: 'none' }}><div className="user-link"><FaRegUser /> Profile</div></Link>
      <Link to="/" style={{ textDecoration: 'none' }}><div className="user-link"><FaRegEdit /> Settings</div></Link>
      <Link to="/" style={{ textDecoration: 'none' }}><div className="user-link"><FaRegArrowAltCircleLeft /> Logout</div></Link>
    </div>
  )
}

export default SideBar
