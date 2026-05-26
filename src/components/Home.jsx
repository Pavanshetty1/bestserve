// import "./Home.css";
// import heroImg from "../assets/pestcontrol.jpg";
import "./Home.css";
import heroImg from "../assets/bestserveimg.jpeg";
import TopBar from "./TopBar";
import "./TopBar.css";
import BookingModal from "./BookingModal";
import { useState } from "react";

function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="home" id="home">
      {/* HERO CONTAINER */}

      <div className="hero-container">
        {/* LEFT CONTENT */}

        <div className="hero-left">
          <p className="small-text">SAFE • CLEAN • RELIABLE</p>

          <h1>
            Your Space <br /> Our Responsibility
          </h1>

          <p className="hero-para">
            We provide dependable solutions to keep your environment clean,
            safe, and worry-free.
          </p>

          <button className="learn-btn" onClick={() => setShowModal(true)}>
            Contact Us
          </button>
          <BookingModal showModal={showModal} setShowModal={setShowModal} />
        </div>

        {/* RIGHT IMAGE */}

        <div className="hero-right">
          <img src={heroImg} alt="pest" />
        </div>
      </div>
    </section>
  );
}

export default Home;
