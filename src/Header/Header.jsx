import "./Header.css"
import {Link} from "react-router-dom"

export default function Header() {
  return (
    <div className='header'>
      <nav className="header-wrapper">
        <Link to ="/"  className="header-item">Home</Link>
        <Link to ="/cart"className="header-item">Cart</Link>
      </nav>
    </div>
  )
}
