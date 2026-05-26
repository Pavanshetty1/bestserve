import "./About.css";
import aboutImg from "../assets/aboutus1.jfif";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <section className="about-section" id="about">
      {/* LEFT IMAGE */}

      <div className="about-image">
        <img src={aboutImg} alt="about" />
      </div>

      {/* RIGHT CONTENT */}

      <div className="about-content">
        <p className="about-small-text">ABOUT US</p>

        <h2>Trusted Pest Control Services For Your Home & Business</h2>

        <p className="about-para">
          We provide professional and reliable pest control solutions with
          modern techniques and experienced specialists to ensure safe and
          hygienic spaces.
        </p>

        {/* FEATURES */}

        <div className="about-features">
          <div className="feature-box">
            <h3>10+</h3>
            <p>Years Experience</p>
          </div>

          <div className="feature-box">
            <h3>500+</h3>
            <p>Happy Clients</p>
          </div>

          <div className="feature-box">
            <h3>24/7</h3>
            <p>Customer Support</p>
          </div>
        </div>

        <button className="about-btn" onClick={() => navigate("/aboutdetails")}>
          Know More
        </button>
      </div>
    </section>
  );
}

export default About;
