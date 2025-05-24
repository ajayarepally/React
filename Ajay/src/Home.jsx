import React from 'react';
import './Home.css';


function Home() {
  return <div id="Home-container">
  <div id='Home'>
    <div className="Home-text">
        <h1>Welcome to My Portfolio</h1>
        <p>I am <h1>Ajay Arepally</h1></p>
        <p>I'm a software engineer with a passion for building innovative solutions.</p>
    </div>
    <div className="Home-image">
        <img src="/Myself.jpg" alt="img" />
    </div>
  </div>
  </div>;
}
export default Home;