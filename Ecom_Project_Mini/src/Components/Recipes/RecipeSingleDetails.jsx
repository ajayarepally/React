import React from 'react';
import { recipes } from './data';
import { useParams } from 'react-router-dom';

const RecipeSingleDetails = () => {
    const params = useParams();
    const matchedRecipe = recipes.recipes.find((x) => x.id === Number(params.id));

    return (
        <div style={styles.container}>
            {matchedRecipe ? (
                <div style={styles.card}>
                    <img src={matchedRecipe.image} alt={matchedRecipe.name} style={styles.image} />
                    <div style={styles.content}>
                        <h1 style={styles.title}>{matchedRecipe.name}</h1>
                        <h2 style={styles.sectionTitle}>Ingredients</h2>
                        <ul style={styles.list}>
                            {matchedRecipe.ingredients.map((x, index) => (
                                <li key={index} style={styles.listItem}>{x}</li>
                            ))}
                        </ul>
                        <h2 style={styles.sectionTitle}>Instructions</h2>
                        <ol style={styles.list}>
                            {matchedRecipe.instructions.map((x, index) => (
                                <li key={index} style={styles.listItem}>{x}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            ) : (
                <div style={styles.notFound}>
                    <h2>🚫 Recipe Not Found</h2>
                    <p>Oops! The recipe you're looking for isn't available.</p>
                    <a href="/" style={{
                        textDecoration: "none",
                        color: "white",
                        backgroundColor: "#0275d8",
                        padding: "10px 15px",
                        borderRadius: "5px",
                        display: "inline-block",
                        marginTop: "15px"
                    }}>Explore Recipes</a>
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
        flexWrap: "wrap", // Ensures mobile stacking
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
    list: {
        padding: "0",
    },
    listItem: {
        fontSize: "16px",
        padding: "5px",
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
            flexDirection: "column", // Stack items on smaller screens
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

export default RecipeSingleDetails;
