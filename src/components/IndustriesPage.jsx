import "./IndustriesPage.css";

import hospitalImg from "../assets/hospital.webp";
import restaurantImg from "../assets/restaurant.jpg";
import buildersImg from "../assets/builders.jpg";
import officeImg from "../assets/office.webp";
import commercialImg from "../assets/commercial.webp";
import { useState } from "react";
import BookingModal from "./BookingModal";

function IndustriesPage() {
  const industries = [
    {
      title: "Hospitals",
      image: hospitalImg,
      desc: "Maintaining sterile, hygienic and pest-free healthcare environments to ensure patient safety, staff wellbeing and cleanliness standards.",
    },
    {
      title: "Food Outlets / Restaurants",
      image: restaurantImg,
      desc: "Providing reliable pest management solutions for restaurants, cafés and food businesses to maintain hygiene, food safety and customer trust.",
    },
    {
      title: "Builders",
      image: buildersImg,
      desc: "Protecting construction sites, new projects and building structures from termite and pest-related damage during development.",
    },
    {
      title: "Corporate Offices",
      image: officeImg,
      desc: "Maintaining clean, hygienic and pest-free office environments to support employee wellbeing and uninterrupted business operations.",
    },
    {
      title: "Commercial Buildings",
      image: commercialImg,
      desc: "Providing reliable pest management solutions for malls, complexes and commercial properties to ensure safety and cleanliness.",
    },
  ];

  const [showModal, setShowModal] = useState(false);

  return (
    <section className="industries-page">
      <div className="industries-page-header">
        <p>INDUSTRIES WE SERVE</p>
        <h1>Professional Pest Control For Every Industry</h1>
      </div>

      <div className="industries-page-grid">
        {industries.map((item, index) => (
          <div className="industry-photo-card" key={index}>
            <img src={item.image} alt={item.title} />

            <div className="industry-photo-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <button onClick={() => setShowModal(true)}>Get Service</button>
            </div>
          </div>
        ))}
      </div>
      <BookingModal showModal={showModal} setShowModal={setShowModal} />
    </section>
  );
}

export default IndustriesPage;
