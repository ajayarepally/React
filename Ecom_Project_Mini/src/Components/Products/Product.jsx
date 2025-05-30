import React from "react";
import { useNavigate } from "react-router-dom";

const Product = (props) => {
    const navigate = useNavigate();
    return (
            <div style={styles.card}>
                <img src={props.singleP.images} alt={props.singleP.title} style={styles.image} />
                <h1 style={styles.title}>{props.singleP.title}</h1>
                <p style={styles.tags}>{props.singleP.tags.join(", ")}</p>
                <button style={styles.button} onClick={() => navigate(`/products/${props.singleP.id}`)}>View More</button>
            </div>
    );
};

const styles = {
    card: {
        padding: "15px",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
        backgroundColor: "#fff",
        margin: "20px",
        textAlign: "center",
    },
    image: {
        width: "100%",
        borderRadius: "10px",
    },
    title: {
        fontSize: "18px",
        fontWeight: "bold",
        margin: "10px 0",
    },
    tags: {
        fontSize: "14px",
        color: "gray",
    },
    button: {
        backgroundColor: "#007bff",
        color: "#fff",
        padding: "10px 15px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        marginTop: "10px",
    }
};

export default Product;
