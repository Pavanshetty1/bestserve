// import "./Navbar.css";
// import heroImg from "../assets/best.png";
// import { useState } from "react";

// function Navbar() {
//   const [showModal, setShowModal] = useState(false);
//   return (
//     <nav className="navbar">
//       {/* LOGO */}

//       <div className="logo">
//         <img src={heroImg} alt="logo"></img>
//       </div>

//       {/* NAV LINKS */}

//       <ul className="nav-links">
//         <li>Home</li>
//         <li>About</li>
//         <li>Services</li>
//         <li>Pricing</li>
//         <li>Contact</li>
//       </ul>

//       {/* BUTTON */}

//       <button className="nav-btn" onClick={() => setShowModal(true)}>
//         Book Now
//       </button>
//       {showModal && (
//         <div className="modal-overlay" onClick={() => setShowModal(false)}>
//           <div className="modal-box" onClick={(e) => e.stopPropagation()}>
//             {/* CLOSE BUTTON */}
//             <button className="close-btn" onClick={() => setShowModal(false)}>
//               ×
//             </button>
//             <h2>Book Your Service</h2>
//             <p>
//               Fast, safe and professional solutions for your home and workplace.
//             </p>
//             <form className="booking-form">
//               <input type="text" placeholder="Your Name" />
//               <input type="tel" placeholder="Phone Number" />
//               <input type="email" placeholder="Email Address" />

//               <select>
//                 <option>Select Service</option>
//                 <option>Home Service</option>
//                 <option>Office Service</option>
//                 <option>Commercial Service</option>
//               </select>

//               <textarea placeholder="Your Message"></textarea>

//               <button type="submit" className="modal-book-btn">
//                 Submit Booking
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;

import "./Navbar.css";
import logoImg from "../assets/best.png";
import { useState } from "react";
import BookingModal from "./BookingModal";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      {/* LOGO */}

      <div className="logo" onClick={() => navigate("/")}>
        <img src={logoImg} alt="logo" />
      </div>
      

      {/* NAV LINKS */}

      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>

        <li>
          <a href="aboutdetails">About Us</a>
        </li>

        <li>
          <a href="/servicespage">Services</a>
        </li>

        <li>
          <a href="/industries">Industries</a>
        </li>

        {/* <li>
          <a href="/location">Our Locations</a>
        </li>  */}

        <li>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>

      {/* BUTTON */}

      <button className="nav-btn" onClick={() => setShowModal(true)}>
        Book Now
      </button>

      {/* BOOKING MODAL */}

      <BookingModal showModal={showModal} setShowModal={setShowModal} />
    </nav>
  );
}

export default Navbar;
