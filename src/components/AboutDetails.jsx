import "./AboutDetails.css";
import founderImg from "../assets/owner.png";
import Mission from "./Mission";
import TeamSection from "./TeamSection";

function AboutDetails() {
  return (
    <main className="about-details">
      <section className="who-section">
        <div className="who-content">
          <span className="section-line"></span>

          <h1>Who Are We?</h1>

          <p className="who-para">
            BestServe Pest Management is a professional pest control company
            offering reliable solutions for homes, offices, apartments and
            commercial spaces.
          </p>

          <div className="quote-box">
            <span>“</span>
            <p>
              At BestServe, we redefine pest control through a technology-driven
              approach, scientific expertise and environmental responsibility to
              create safer and healthier spaces.
            </p>
          </div>

          <div className="founder-name">
            <h3>B S Prashanth Shetty</h3>
            <p>Founder - BestServe Pest Management</p>
          </div>
        </div>

        <div className="who-image">
          <img src={founderImg} alt="Founder" />
        </div>
      </section>
      <Mission />
      <TeamSection />
    </main>
  );
}

export default AboutDetails;
