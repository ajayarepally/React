import React from 'react';

const NotFound = () => {
  return (
    <div style={{
      textAlign: 'center',
      marginTop: '50px',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      color: '#333'
    }}>
      <img src="https://cdn3.iconfinder.com/data/icons/user-interface-732/32/Click-1024.png" alt="" style={{width:'200px'}}/>
      <h2>Oops! Select the appropriate category</h2>
      <p style={{ fontSize: '18px' }}>
        Click on the button below to return to the home page.
      </p>
      <a href="/" style={{
        textDecoration: 'none',
        color: 'white',
        backgroundColor: '#0275d8',
        padding: '10px 20px',
        borderRadius: '5px',
        display: 'inline-block',
        marginTop: '20px'
      }}>Go Home</a>
    </div>
  );
};

export default NotFound;
