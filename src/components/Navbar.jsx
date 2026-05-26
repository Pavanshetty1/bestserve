
import "./Navbar.css";
import logoImg from "../assets/best.png";
import { useState } from "react";
import BookingModal from "./BookingModal";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate("/")}>
        <img src={logoImg} alt="logo" />
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <a href="/" onClick={closeMenu}>
            Home
          </a>
        </li>

        <li>
          <a href="/aboutdetails" onClick={closeMenu}>
            About Us
          </a>
        </li>

        <li>
          <a href="/servicespage" onClick={closeMenu}>
            Services
          </a>
        </li>

        <li>
          <a href="/industries" onClick={closeMenu}>
            Industries
          </a>
        </li>

        <li>
          <a href="#contact" onClick={closeMenu}>
            Contact Us
          </a>
        </li>

        <li className="mobile-book">
          <button onClick={() => setShowModal(true)}>Book Now</button>
        </li>
      </ul>

      <button className="nav-btn" onClick={() => setShowModal(true)}>
        Book Now
      </button>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <BookingModal showModal={showModal} setShowModal={setShowModal} />
    </nav>
  );
}

export default Navbar;
