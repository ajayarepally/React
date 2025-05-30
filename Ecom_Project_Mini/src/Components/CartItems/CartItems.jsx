import React from 'react';

const CartItems = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Your Cart</h1>
      <div style={styles.card}>
        <h2 style={styles.message}>🛒 No items in your cart yet!</h2>
        <p style={styles.info}>
          Your selected products will appear here once added to the cart.
        </p>
        <button style={styles.button}>Browse Products</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    display: 'inline-block',
    maxWidth: '500px',
    marginTop: '20px',
  },
  message: {
    fontSize: '24px',
    color: '#d9534f',
  },
  info: {
    fontSize: '18px',
    marginTop: '10px',
    color: '#555',
  },
  button: {
    backgroundColor: '#0275d8',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '15px',
  },
};

export default CartItems;
