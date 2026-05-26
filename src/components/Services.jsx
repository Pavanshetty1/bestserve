import { useNavigate } from "react-router-dom";
import "./Services.css";
import {
  FaBug,
  FaHome,
  FaBuilding,
  FaShieldAlt,
  FaSprayCan,
  FaPumpSoap,
  FaBroom,
} from "react-icons/fa";

function Services() {
  const navigate = useNavigate();
  const services = [
    {
      icon: <FaBug />,
      title: "Pest Control Services",
      desc: "We provide safe and effective treatments against cockroaches, bed bugs, mosquitoes, flies, rodents and termites.",
    },
    {
      icon: <FaSprayCan />,
      title: "Anti-Termite Treatment",
      desc: "We apply a strong chemical barrier around foundation and flooring to prevent termite attacks right from construction stage.",
    },
    {
      icon: <FaPumpSoap />,
      title: "Deep Cleaning Services",
      desc: "From kitchens to offices, we eliminate hidden dirt, stains and germs, restoring complete hygiene and comfort.",
    },
    {
      icon: <FaBroom />,
      title: "Interior Clean Up",
      desc: "Complete debris removal, floor protection, touch-up finishing and deep cleaning during and after interior work.",
    },
  ];

  return (
    <section className="services-section">
      <p className="services-small-text">OUR SERVICES</p>

      <h2>Professional Pest Control Services</h2>

      <p className="services-para">
        We provide safe, effective and affordable pest control solutions.
      </p>

      <div className="services-grid">
        {services.map((item, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      <button className="explore-btn" onClick={() => navigate("/servicespage")}>
        Explore
      </button>
    </section>
  );
}

export default Services;
