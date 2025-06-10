import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Random Color</Link>
      <Link to="/quote">Random Quote</Link>
      <Link to="/theme">Toggle Theme</Link>
      <Link to="/signup">Signup</Link>
    </nav>
  );
};

export default Navbar;
