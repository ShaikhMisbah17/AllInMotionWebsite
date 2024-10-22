import React from "react";
import "./Reviews.css";
import feedback from "../../assets/Images/feedbackReview.png";

function Reviews() {
  return (
    <div className="reviews-wrapper">
      <div className="reviews-tagline">
        <p className="reviews_tagline-1">Trusted by</p>
        <p className="reviews_tagline-2">Many</p>
      </div>
      <div className="feedback">
        <img className="feedback-img" src={feedback} alt="feedback" />
      </div>
    </div>
  );
}

export default Reviews;
