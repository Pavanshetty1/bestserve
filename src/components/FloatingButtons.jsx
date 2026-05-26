import "./FloatingButtons.css";

import { FaWhatsapp } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

import { useEffect, useState } from "react";

function FloatingButtons() {

  const [showTop, setShowTop] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 500) {
        setShowTop(true);
      } else {
        setShowTop(false);
      }

    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="floating-buttons">

      {/* WHATSAPP */}

      <a
        href="https://wa.me/917022292417"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >
        <FaWhatsapp />
      </a>

      {/* SCROLL TOP */}

      {showTop && (
        <button
          className="scroll-top-btn"
          onClick={scrollTop}
        >
          <IoIosArrowUp />
        </button>
      )}

    </div>
  );
}

export default FloatingButtons;