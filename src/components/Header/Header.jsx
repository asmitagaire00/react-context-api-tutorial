import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <h2 className="headder-h2">React Context Api Tutorial</h2>
      <nav className="header-wrapper">
        <Link to="/">
          <span className="header-link">Home</span>
        </Link>
        <Link to="/cart">
          <span className="header-link">Cart</span>
        </Link>
      </nav>
    </div>
  );
}
