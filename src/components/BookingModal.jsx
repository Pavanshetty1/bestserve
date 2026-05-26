import "./BookingModal.css";
import { useState } from "react";

function BookingModal({ showModal, setShowModal }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const [loading, setLoading] = useState(false);

  if (!showModal) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setSuccessMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/send-mail", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        // CLEAR FORM

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });

        // SUCCESS MESSAGE

        setSuccessMessage(
          "Thank you for filling out the form. Our team will contact you shortly.",
        );
      } else {
        setSuccessMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.log(error);

      setSuccessMessage("Server error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="modal-overlay" onClick={() => setShowModal(false)}>
      <div className="booking-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={() => setShowModal(false)}>
          ×
        </button>

        <h2>Book Service</h2>

        <p className="modal-desc">
          Fill the form and our team will contact you shortly.
        </p>

        <form className="booking-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </button>

          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default BookingModal;
