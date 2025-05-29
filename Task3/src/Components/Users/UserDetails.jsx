import UserData from "./UsersData";

function UserDetails() {
  return (
    <div className="users-details">
      <h1>Users Data Details</h1>
      <div className="users-list" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", padding: "20px" }}>
        {UserData.map((item) => (
          <div key={item.id} className="users-item" style={{textAlign: "center", padding: "10px", margin: "10px", borderRadius: "10px", backgroundColor: "beige", width: "280px", boxShadow: "0px 0px 5px grey" }}>
            <img src={item.image} alt={item.firstName} style={{ width: "100%", height: "auto", borderRadius: "10px" }} />
            <h3>{item.firstName} {item.lastName}</h3>
            <p>Age: {item.age}, Gender: {item.gender}</p>
            <p>Email: {item.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserDetails;
