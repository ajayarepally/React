import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import Projects from './Projects.jsx';
import About from './About.jsx';
import Team from './Team.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';
import './App.css';

function App() {
  return <div class="container">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Team />
      <Contact />
      <Footer />
   </div>;
}

export default App;
