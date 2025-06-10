const Navbar = () => {
  const reloadTo = (path) => {
    window.location.href = path;
  };

  return (
    <nav className="navbar">
      <button onClick={() => reloadTo('/')}>Random Color</button>
      <button onClick={() => reloadTo('/quote')}>Random Quote</button>
      <button onClick={() => reloadTo('/theme')}>Toggle Theme</button>
      <button onClick={() => reloadTo('/signup')}>Signup</button>
    </nav>
  );
};

export default Navbar;
