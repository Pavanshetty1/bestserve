import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      {/* LEFT */}

      <div className="contact-left">
        <p className="small-text">CONTACT US</p>

        <h2>Get In Touch</h2>

        <p>
          Reach out to our team for fast and reliable pest control services.
        </p>

        <div className="contact-details">
          <p>📞 +91 7022292417</p>

          <p>📧 info@company.com</p>

          <p>📍 Bangalore, Karnataka</p>
        </div>
      </div>

      {/* RIGHT MAP */}

      <div className="contact-map">
        <iframe
          title="Google Map"
          src="https://maps.google.com/maps?q=Bestserve%20Pest%20Management%20Ground%20Floor%20Lokesh%20Building%20372%2F2%20near%20DLF%20Newtown%20Hogebandi%20Garden%20Begur%20Bengaluru%20Karnataka%20560114&z=15&output=embed"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

export default Contact;
