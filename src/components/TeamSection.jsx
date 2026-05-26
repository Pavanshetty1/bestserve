import "./TeamSection.css";
import team1 from "../assets/Director.png";
import team2 from "../assets/branch.png";
import team3 from "../assets/team3.jfif";

function TeamSection() {
  const teamData = [
    {
      image: team1,
      name: "Soumya Shetty",
      role: "Director",
    },
    {
      image: team2,
      name: "Anup Shetty",
      role: "Branch Manager",
    },
    {
      image: team3,
      name: "Team Member",
      role: "Service Expert",
    },
  ];

  return (
    <section className="team-section">
      <p className="team-small-text">MEET OUR TEAM</p>

      <h2>Experts Behind BestServe</h2>

      <p className="team-para">
        Our trained team works with care, safety and professionalism to deliver
        reliable pest control solutions.
      </p>

      <div className="team-grid">
        {teamData.map((item, index) => (
          <div className="team-card" key={index}>
            <img src={item.image} alt={item.name} />

            <div className="team-info">
              <h3>{item.name}</h3>
              <p>{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamSection;
