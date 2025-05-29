import ProductsData from "./ProductsData";

function ProductsDetails() {
  return (
    <div className="products-details">
      <h1>Products Data Details</h1>
      <div className="products-list" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", padding: "20px" }}>
        {ProductsData.map((item) => (
          <div key={item.id} className="products-item" style={{textAlign: "center", padding: "10px", margin: "10px", borderRadius: "10px", backgroundColor: "beige", width: "280px", boxShadow: "0px 0px 5px grey" }}>
            <img src={item.images} alt={item.name} style={{ width: "100%", height: "auto", borderRadius: "10px" }} />
            <h3>{item.title}</h3>
            <p>Rating: {item.rating}⭐</p>
            <p>Category: {item.category}</p>
            <p>Tags: {item.tags.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsDetails;
