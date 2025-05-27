import "./Projects.css";

const projects = [
  { title: "Summer House", image: "https://www.w3schools.com/w3images/house5.jpg" },
  { title: "Brick House", image: "https://www.w3schools.com/w3images/house2.jpg" },
  { title: "Renovated", image: "https://www.w3schools.com/w3images/house3.jpg" },
  { title: "Barn House", image: "https://www.w3schools.com/w3images/house4.jpg" },
  { title: "Summer House", image: "https://www.w3schools.com/w3images/house2.jpg" },
  { title: "Brick House", image: "https://www.w3schools.com/w3images/house5.jpg" },
  { title: "Renovated", image: "https://www.w3schools.com/w3images/house4.jpg" },
  { title: "Barn House", image: "https://www.w3schools.com/w3images/house3.jpg" },
];

function Projects() {
  return (
    <section className="section" id="projects">
      <h3>Projects</h3>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} />
              <div className="label">{project.title}</div>
            </div>
          ))}
        </div>
    </section>
  );
}

export default Projects;
