import React from "react";
import "./Navbar.css";
import logo from "../../assets/Images/logo.png";

function Navbar() {
  return (
    <header>
      <div className="navbar">
        <div className="navChild">
          <p>[ menu ]</p>
        </div>
        <div className="navChild">
          <p>
            ALL<i>IN</i>MOTION
          </p>
        </div>
        <div className="navChild">
          <img className="prj_logo" src={logo} alt="Logo" />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
