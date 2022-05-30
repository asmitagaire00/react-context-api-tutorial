import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context";
import "./Header.css";

export default function Header() {
  const { cart } = useContext(CartContext);
  return (
    <div className="header">
      <h2 className="headder-h2">React Context Api Tutorial</h2>
      <nav className="header-wrapper">
        <Link to="/">
          <span className="header-link">Home</span>
        </Link>
        <Link to="/cart">
          <span className="header-link">Cart({cart.length})</span>
        </Link>
      </nav>
    </div>
  );
}
