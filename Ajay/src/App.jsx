import React from "react";
import "./App.css";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Languages from "./Languages.jsx";
import Projects from "./Projects.jsx";
import Footer from "./Footer.jsx";

function App() {
  return <div id="App">
    <div className="App-header">
      <div className="App-logo"><h1>Portfolio</h1></div>
      <div className="App-links">
      <a href="#" target="_self">Home</a>
      <a href="#About" target="_self">About</a>
      <a href="#Languages" target="_self">Languages</a>
      <a href="#Projects" target="_self">Projects</a>
      <a href="#Contact" target="_self">Contact</a>
      </div>
    </div>
    <div className="App-body">
      <Home />
    </div>
    <div className="App-about" id="About">
      <About />
    </div>
    <div className="App-languages" id="Languages">
      <Languages />
    </div>
    <div className="App-projects" id="Projects">
      <Projects />
    </div>
    <div className="App-footer" id="Contact">
      <Footer />
  </div>
  </div>;
}
export default App;