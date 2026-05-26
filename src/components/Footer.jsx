import "./Footer.css";
import logoImg from "../assets/best.png";

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      {/* TOP */}

      <div className="footer-top">
        {/* LOGO + ABOUT */}

        <div className="footer-box">
          <img src={logoImg} alt="logo" />

          <p>
            Professional pest control solutions for homes, offices and
            industries.
          </p>

          {/* SOCIAL ICONS */}

          <div className="footer-socials">
            <a
              href="https://www.instagram.com/bestserve_pest_management/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/BSPMPL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.linkedin.com/company/bestserve-pest-management-pvt/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://wa.me/917022292417"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-box">
          <h3>Quick Links</h3>

          <ul>
            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <a href="/aboutdetails">About</a>
            </li>

            <li>
              <a href="/services">Services</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* SERVICES */}

        <div className="footer-box">
          <h3>Services</h3>

          <ul>
            <li>
              <a href="/servicespage">Pest Control Service</a>
            </li>

            <li>
              <a href="/servicespage">Anti-Termite Treatment</a>
            </li>

            <li>
              <a href="/servicespage">Deep Cleaning Service</a>
            </li>

            <li>
              <a href="/servicespage">Interior Clean Up</a>
            </li>
          </ul>
        </div>

        {/* CONTACT */}

        <div className="footer-box">
          <h3>Contact</h3>

          <div className="footer-contact">
            <FaPhoneAlt />
            <p>+91 7022292417</p>
          </div>

          <div className="footer-contact">
            <FaEnvelope />
            <p>info@company.com</p>
          </div>

          <div className="footer-contact">
            <FaMapMarkerAlt />
            <p>Bangalore, Karnataka</p>
          </div>
        </div>
      </div>

      {/* BOTTOM */}

      <div className="footer-bottom">
        <p>© 2026 BestServe Pest Management. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
