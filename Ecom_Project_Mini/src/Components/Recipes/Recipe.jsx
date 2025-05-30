import React from 'react'
import { useNavigate } from 'react-router-dom'
const Recipe = ({ singleR }) => {
    const navigate = useNavigate()
    return (
            <div className='recipeSingle' style={{ textAlign: "center",padding: "15px", margin: "10px", borderRadius: "10px" }}>
                <img src={singleR.image} alt=""  style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "10px" }}/>
                <h1>{singleR.name}</h1>
                <p>{singleR.cuisine}</p>
                <span style={{ backgroundColor: "#007bff", padding: "10px 15px", borderRadius: "5px", cursor: "pointer", color: "#fff" }} onClick={() => navigate(`/recipes/${singleR.id}`)}>ViewMore</span>
            </div>

    )
}

export default Recipe