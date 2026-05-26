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
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.linkedin.com/"
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
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* SERVICES */}

        <div className="footer-box">
          <h3>Services</h3>

          <ul>
            <li>Home Pest Control</li>
            <li>Office Pest Control</li>
            <li>Termite Control</li>
            <li>Mosquito Control</li>
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
