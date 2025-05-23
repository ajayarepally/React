import React from "react";
import "./Languages.css";

    const techStack = [
  { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Bootstrap", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "Firebase", img: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" },
  { name: "JSON", img: "https://www.vectorlogo.zone/logos/json/json-icon.svg" },
  { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
];


function Languages() {
  return (
    <section className="languages-section">
      <h2>Languages & Technologies</h2>
      <div className="languages-grid">
        {techStack.map((tech) => (
          <div className="language-card" key={tech.name}>
            <img src={tech.img} alt={tech.name} />
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Languages;
