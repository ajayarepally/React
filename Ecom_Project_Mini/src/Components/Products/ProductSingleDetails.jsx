import React from 'react';
import { products } from './ProductData';
import { useParams } from 'react-router-dom';

const ProductSingleDetails = () => {
    const params = useParams();
    const matchedProduct = products.products.find((x) => x.id === Number(params.id));

    return (
        <div style={styles.container}>
            {matchedProduct ? (
                <div style={styles.card}>
                    <img src={matchedProduct.thumbnail} alt={matchedProduct.title} style={styles.image} />
                    <div style={styles.content}>
                        <h1 style={styles.title}>{matchedProduct.title}</h1>
                        <p style={styles.description}>{matchedProduct.description}</p>
                        <h2 style={styles.sectionTitle}>Price: ${matchedProduct.price.toFixed(2)}</h2>
                        <h2 style={styles.sectionTitle}>Category: {matchedProduct.category}</h2>
                        <h2 style={styles.sectionTitle}>Brand: {matchedProduct.brand}</h2>
                        <h2 style={styles.sectionTitle}>Rating: ⭐ {matchedProduct.rating}/5</h2>
                        <h2 style={styles.sectionTitle}>Stock: {matchedProduct.stock} available</h2>
                        <button style={styles.button}>Add to Cart</button>
                    </div>
                </div>
            ) : (
                <div style={styles.notFound}>
                    <h2>🚫 Product Not Found</h2>
                    <p>Oops! The product you're looking for isn't available.</p>
                    <a href="/" style={{
                        textDecoration: "none",
                        color: "white",
                        backgroundColor: "#0275d8",
                        padding: "10px 15px",
                        borderRadius: "5px",
                        display: "inline-block",
                        marginTop: "15px"
                    }}>Explore Products</a>
                </div>
            )}
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
    },
    card: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        maxWidth: "800px",
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        textAlign: "left",
        gap: "20px",
        flexWrap: "wrap",
    },
    image: {
        width: "100%",
        maxWidth: "300px",
        borderRadius: "10px",
    },
    content: {
        flex: 1,
    },
    title: {
        fontSize: "24px",
        fontWeight: "bold",
        marginBottom: "10px",
    },
    sectionTitle: {
        fontSize: "18px",
        fontWeight: "bold",
        marginTop: "15px",
    },
    description: {
        fontSize: "16px",
        lineHeight: "1.5",
    },
    button: {
        backgroundColor: "#0275d8",
        color: "#fff",
        padding: "10px 15px",
        borderRadius: "5px",
        border: "none",
        fontSize: "16px",
        cursor: "pointer",
        marginTop: "15px",
    },
    notFound: {
        fontSize: "20px",
        fontWeight: "bold",
        color: "#d9534f",
        textAlign: "center",
        padding: "20px",
        borderRadius: "8px",
        backgroundColor: "#ffe6e6",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    },

    "@media (max-width: 600px)": {
        card: {
            flexDirection: "column",
            alignItems: "center",
        },
        image: {
            width: "100%",
        },
        content: {
            textAlign: "center",
        }
    }
};

export default ProductSingleDetails;
