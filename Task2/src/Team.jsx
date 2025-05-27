const team = [
  { name: "John Doe", role: "CEO & Founder", img: "https://www.w3schools.com/w3images/team2.jpg" },
  { name: "Jane Doe", role: "Architect", img: "https://www.w3schools.com/w3images/team1.jpg" },
  { name: "Mike Ross", role: "Architect", img: "https://www.w3schools.com/w3images/team3.jpg" },
  { name: "Dan Star", role: "Architect", img: "https://www.w3schools.com/w3images/team4.jpg" },
];

function Team() {
  return (
    <section className="section" id="team">
      <h3>Team</h3>
      <div className="team-grid">
        {team.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.img} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <p>
              Phasellus eget enim eu lectus faucibus vestibulum.
              Suspendisse sodales pellentesque elementum.
            </p>
            <button>Contact</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
