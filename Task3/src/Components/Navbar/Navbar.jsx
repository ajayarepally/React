import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar" style={{ textAlign: "center"}}>
      <nav style={{ display:" flex" , justifyContent: "space-around", alignItems: "center", position: "fixed", top: 0,left: 0, width: "100%", backgroundColor: "#f8f9fa", padding: "10px 0", boxShadow: "5px 5px 10px rgba(0,0,0,0.2)" }}>
        <h1>Dummy Data</h1>
        <div className="nav-links" style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <Link to="/RecipesData" className="nav-link">Recipes Data</Link>
          <Link to="/ProductsData" className="nav-link">Products Data</Link>
          <Link to="/UsersData" className="nav-link">Users Data</Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
