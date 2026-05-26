import "./Mission.css";

function MissionSection() {
  const missionData = [
    {
      title: "Safe & Eco Friendly",
      desc: "We use safe and environmentally responsible pest control methods.",
    },

    {
      title: "Advanced Techniques",
      desc: "Modern equipment and proven treatment processes for better results.",
    },

    {
      title: "Customer Satisfaction",
      desc: "Reliable support and long-term pest management solutions.",
    },

    {
      title: "Expert Team",
      desc: "Experienced professionals trained for residential and commercial services.",
    },
  ];

  return (
    <section className="mission-section">

      {/* LEFT */}

      <div className="mission-left">

        <p className="mission-small-text">
          OUR MISSION
        </p>

        <h2>
          Delivering Safe & Reliable Pest Control Solutions
        </h2>

        <p className="mission-para">
          Our mission is to provide effective pest management
          solutions through modern technology, expert service
          and customer-focused support.
        </p>

      </div>

      {/* RIGHT */}

      <div className="mission-right">

        {missionData.map((item, index) => (

          <div className="mission-card" key={index}>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default MissionSection;