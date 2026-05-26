import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
function TopBar() {
  return (
    <div className="topbar" id="topbar">
      <div className="topbar-item">
        <FaEnvelope />
        <p>info@company.com</p>
      </div>

      <div className="topbar-item">
        <FaPhoneAlt />
        <p>+91 70222 92417</p>
      </div>

      <div className="topbar-socials">
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
  );
}

export default TopBar;
