import { Link } from "react-router-dom";

function Links() {
  return (
    <div className="links" style={{ textAlign: "center"}}>
      <nav style={{ position: "fixed", top: 0, width: "100%", backgroundColor: "#f8f9fa", padding: "10px 0", boxShadow: "5px 5px 10px rgba(0,0,0,0.2)" }}>
        <h1>Navigation Links</h1>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <Link to="/StudentDetails" style={{ textDecoration: "none", color: "maroon", fontWeight: "bold", border: "2px solid maroon", borderRadius: "5px", padding: "5px 10px" }}>Student Details</Link>
          <Link to="/DummyData" style={{ textDecoration: "none", color: "maroon", fontWeight: "bold", border: "2px solid maroon", borderRadius: "5px", padding: "5px 10px" }}>Dummy Data</Link>
        </div>
      </nav>
    </div>
  );
}

export default Links;
