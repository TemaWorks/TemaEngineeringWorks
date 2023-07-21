import React from "react";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <div className="contact_container" style={{ top: "150px" }}>
        <h2>Contact us</h2>
        <div className="g_map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4819.4832484986855!2d73.00823443521669!3d19.14597457002953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c0a7622d1ecd%3A0x831ef98b66021743!2sRabale%2C%20Navi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1687803761163!5m2!1sen!2sin"
            width="100%"
            height="600"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contact_content">
          <p>
            <b>
              TEMA ENGINEERING WORKS, Plot No. R-70, Rabale MIDC, Thane Belapur
              Road, Navi Mumbai-400 701.
            </b>
          </p>
          <p>
            <b>Call : +91 98923 22821</b>
          </p>
          <p>
            <b>Mail : tema_ew@yahoo.com</b>
          </p>
          <p>
            <b>GSTIN : 27ABSPP1746K1Z0</b>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
