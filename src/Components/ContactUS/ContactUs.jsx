import React from "react";
import "./ContactUs.css";
import round from "../../assets/Images/contact_round.png";
import UnionVector from "../../assets/Images/UnionVector.png";

function ContactUs() {
  return (
    <div className="contact-wrapper">
      <div className="contact-tagline">
        <p className="contact-tagline-1">Ready to</p>
        <p className="contact-tagline-2">work</p>
        <p className="contact-tagline-3">together?</p>
      </div>
      <div className="contact-vector">
        <img className="contact-round" src={round} alt="vector-img" />
        <img className="vector-arrow" src={UnionVector} alt="vector-img" />
      </div>
    </div>
  );
}

export default ContactUs;
