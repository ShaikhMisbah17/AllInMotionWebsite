import React from "react";
import sml_coverImg from "../../assets/Images/sml_coverImg.png";
import "./Title.css";

function Title() {
  return (
    <div className="textContent">
      <div className="firstColAlphabets">
        <div className="alphabets">
          <p className="alphabet_a">A</p>
        </div>
        <div className="alphabets">
          <p className="alphabet_m">M</p>
        </div>
        <div className="alphabets">
          <p className="alphabet_a">A</p>
        </div>
        <div className="alphabets">
          <p className="alphabet_m">M</p>
        </div>
      </div>

      <div className="secondColAlphabets">
        <div className="alphabets">
          <p className="alphabet_l">L</p>
        </div>
        <div className="alphabets">
          <p className="alphabet_o">O</p>
        </div>
        <div className="alphabets">
          <p className="alphabet_l">L</p>
        </div>
        <div className="alphabets">
          <p className="alphabet_o">O</p>
        </div>
      </div>

      <div className="thirdColAlphabets">
        <div className="alphabets">
          <p className="alphabet_l">L</p>
        </div>
        <div className="alphabets">
          <p className="alphabet_t">T</p>
        </div>
        <div className="alphabets">
          <p className="alphabet_l">L</p>
        </div>
        <div className="alphabets">
          <p className="alphabet_t">T</p>
        </div>
      </div>

      <div className="fourthColAlphabets">
        <div className="alphabets">
          <img className="rect_img" src={sml_coverImg} alt="logo" />
        </div>
        <div className="alphabets">
          <p className="alphabet_i">I</p>
        </div>
        <div className="alphabets">
          <p className="para">
            Deliver in time all things amazing of value. Travel beyond
            passionately, without fear with respect for everyone.
          </p>
        </div>
        <div className="alphabets">
          <p className="alphabet_i-bottom">I</p>
        </div>
      </div>

      <div className="fifthColAlphabets">
        <div className="alphabets">
          <p className="alphabet_i">I</p>
        </div>
        <div className="alphabets">
          <p className="alphabet_o">O</p>
        </div>
        <div className="alphabets">
          <p className="alphabet_i">I</p>
        </div>
        <div className="alphabets">
          <p className="alphabet_o">O</p>
        </div>
      </div>

      <div className="sixthColAlphabets">
        <div className="alphabets">
          <p className="alphabet_n">N</p>
        </div>
        <div className="alphabets">
          <p className="alphabet_n">N</p>
        </div>
        <div className="alphabets">
          <p className="alphabet_n">N</p>
        </div>
        <div className="alphabets">
          <p className="alphabet_n">N</p>
        </div>
      </div>
    </div>
  );
}

export default Title;
