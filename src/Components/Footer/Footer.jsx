import React from "react";
import "./Footer.css";
import frameIcon from "../../assets/Images/IconFrames.png";
import clutch from "../../assets/Images/Clutch Link.png";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-wrapper-top">
        <p className="pages">[ home ]</p>
        <p className="pages">[ about ]</p>
        <p className="pages">[ services ]</p>
        <p className="pages">[ works ]</p>
        <p className="pages">[ contacts ]</p>
      </div>
      <div className="footer-wrapper-bottom">
        <p className="bottom-line">Cookies Policy</p>
        <img className="clutch" src={clutch} alt="clutch-img" />
        <img className="frame-icons" src={frameIcon} alt="icons" />
        <p className="bottom-line">
          © 2024 ALLIINMOTION Studios Pvt. Ltd. All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
