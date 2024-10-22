import React from "react";
import "./AboutUs.css";
import Vector_1 from "../vector-1/vector";
import aboutusImage from "../../assets/Images/aboutusImage.png";
import aboutUsLogo from "../../assets/Images/aboutUsLogo.png";
import aboutusvector from "../../assets/Images/AboutusVector.png";

function AboutUs() {
  return (
    <div className="aboutUs_Wrapper">
      <Vector_1 />

      <div className="textWrapper">
        <p className="text-1">A Creative Vision</p>
        <p className="text-2">in Motion</p>
        <img className="aboutusImg" src={aboutusImage} alt="aboutusImage" />
      </div>
      <div className="aboutus-info">
        <div className="left-info">
          <p className="info-text1">
            All in Motion is a global creative production company. Our creative
            endeavours are underpinned by an empathy driven pursuit of emotions.
          </p>
        </div>
        <div className="right-info">
          <p className="info-text2">
            We provide a broad spectrum of solutions from bespoke deliveries to
            integrated campaigns thanks to an involved in-house team.
          </p>
        </div>
      </div>
      <img className="aboutus_logo" src={aboutUsLogo} alt="logo" />
    </div>
  );
}

export default AboutUs;
