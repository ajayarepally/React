import RecipesData from "./RecipesData";

function RecipesDetails() {
  return (
    <div className="recipes-details">
      <h1>Recipes Data Details</h1>
      <div className="recipes-list" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", padding: "20px" }}>
        {RecipesData.map((item) => (
          <div key={item.id} className="recipes-item" style={{textAlign: "center", padding: "10px", margin: "10px", borderRadius: "10px", backgroundColor: "beige", width: "280px", boxShadow: "0px 0px 5px grey" }}>
            <img src={item.image} alt={item.name} style={{ width: "100%", height: "auto", borderRadius: "10px" }} />
            <h3>{item.name}</h3>
            <p>Rating: {item.rating}⭐</p>
            <p>Category: {item.cuisine}</p>
            <p>MealType: {item.mealType.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipesDetails;
