import react from 'react';
import './Projects.css';

const projects = [
  {
    title: "TaskMaster Pro - Smart To-Do List App",
    description: "A clean, intuitive to-do app with full CRUD operations. Add, edit, complete, and delete tasks effortlessly. Built with HTML, CSS, and JavaScript.",
    image: "/todo.png",
    link: "https://ajayarepally.github.io/JavaScript/To_Do_list/index.html"
  },
  {
    title: "Yummy – Restaurant Landing Page",
    description: "A responsive landing page for a restaurant built with HTML, CSS, JavaScript and Bootstrap featuring a hero section, smooth layout, animations and call-to-action buttons.",
    image: "/yummy.png",
    link: "https://ajayarepally.github.io/css/project/index.html"
  },
  {
    title: "Responsive Online Shopping UI",
    description: "Responsive online shopping UI built with HTML, CSS, JavaScript, and JSON. Features dynamic product cards, category filtering, and cart actions with a clean, mobile-friendly design.",
    image: "/shopping.png",
    link: "https://ajayarepally.github.io/JavaScript/Sceneries1/index.html"
  },
  {
    title: "User Login Page",
    description: "A modern login page with a blurred mountain background, built using HTML, CSS, and JavaScript. Users enter their email and password to log in or sign up, and are directed to the dashboard after authentication (with JSON server as backend).",
    image: "/login.png",
    link: "https://ajayarepally.github.io/JavaScript/loginpage/loginpage.html"
  }
];

const Projects = () => {
  return (
    <section id="Projects" className="fade-slide-up">
      <h2>My Projects</h2>
      <p>Here are some of the projects I've worked on:</p>
    <div className="projects">
      {projects.map((project, index) => (
        <div className="project" key={index}>
          <img src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      ))}
    </div>
    </section>
  );
};

export default Projects;