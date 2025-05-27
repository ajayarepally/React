import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">BR <span>Architects</span></div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
