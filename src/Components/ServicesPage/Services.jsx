import React from "react";
import "./Services.css";
import servicesFrame from "../../assets/Images/servicesFrame.png";
import Vector_2 from "../Vector-2/Vector_2";

function Services() {
  return (
    <div className="services-wrapper">
      <Vector_2 />
      <div className="services-tagline">
        <p className="tagline_text-1">Elevate your</p>
        <p className="tagline_text-2">Storytelling</p>
      </div>
      <div className="services-skills">
        <img className="services-frameset" src={servicesFrame} alt="skills" />
      </div>
    </div>
  );
}

export default Services;
