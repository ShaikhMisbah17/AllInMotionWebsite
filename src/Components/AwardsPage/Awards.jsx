import React from "react";
import "./Awards.css";
import awards from "../../assets/Images/hermes award.png";
import Vector_3 from "../Vector-3/Vector_3";

function Awards() {
  return (
    <div className="awards-wrapper">
      <Vector_3 />
      <div className="awards-tagline">
        <p className="awards_tagline-1">Championing</p>
        <p className="awards_tagline-2">Achievements</p>
      </div>

      <div className="awards-details">
        <div className="awards-leftSection">
          <p className="A1">[ Hermes gold award ] </p>
          <p className="A2">[ Hermes award ]</p>
          <p className="A1">[ Viddy awards ]</p>
          <p className="A1">[ Viddy platinum award ]</p>
          <p className="A1">[ Viddy platinum award ]</p>
        </div>

        <div className="award-image">
          <img className="award" src={awards} alt="award-img" />
        </div>

        <div className="awards-rtSection">
          <p className="category">Motion category</p>
          <p className="year">2023</p>
        </div>
      </div>
    </div>
  );
}

export default Awards;
