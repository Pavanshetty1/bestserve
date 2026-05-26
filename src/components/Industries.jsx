import "./Industries.css";
import { Link } from "react-router-dom";
import {
  FaHospital,
  FaUtensils,
  FaHardHat,
  FaBuilding,
  FaCity,
} from "react-icons/fa";

function Industries() {
  const industries = [
    {
      title: "Hospitals",
      icon: <FaHospital />,
      desc: "Sterile and pest-free healthcare spaces.",
    },
    {
      title: "Food Outlets",
      icon: <FaUtensils />,
      desc: "Clean and hygienic dining environments.",
    },
    {
      title: "Builders",
      icon: <FaHardHat />,
      desc: "Protection for construction sites.",
    },
    {
      title: "Corporate Offices",
      icon: <FaBuilding />,
      desc: "Safe and pest-free workplaces.",
    },
    {
      title: "Commercial Buildings",
      icon: <FaCity />,
      desc: "Reliable service for large properties.",
    },
  ];

  return (
    <section className="industries-home">
      <div className="industries-header">
        <p>INDUSTRIES WE SERVE</p>
        <h2>Trusted Across Multiple Industries</h2>
      </div>

      <div className="industries-icon-grid">
        {industries.map((item, index) => (
          <div className="industry-icon-card" key={index}>
            <div className="industry-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="industries-btn-box">
        <Link to="/industries" className="industries-btn">
          Explore
        </Link>
      </div>
    </section>
  );
}

export default Industries;
