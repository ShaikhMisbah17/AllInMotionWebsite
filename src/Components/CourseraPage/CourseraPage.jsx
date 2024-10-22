import React from "react";
import "./CourseraPage.css";
import No_of_clients from "../../assets/Images/No_ of_ clients.png";
import co from "../../assets/Images/co.png";
import coursera from "../../assets/Images/coursera.png";
import ra from "../../assets/Images/ra.png";

function CourseraPage() {
  return (
    <div className="clientsPage">
      <div className="clients_tagline">
        <p className="tagline-1">
          Bringing <span className="vision">Visions</span>
        </p>
        <p className="tagline-2">to Life</p>
      </div>
      <img className="no-of-clients" src={No_of_clients} alt="clients" />
      <div className="x-scroll">
        <div className="scroll-container">
          <img className="coursera-img-ra" src={ra} alt="ra-img" />
          <img className="coursera-img" src={coursera} alt="co-img" />
          <img className="coursera-img" src={coursera} alt="co-img" />
          <img className="coursera-img" src={coursera} alt="co-img" />
          <img className="coursera-img" src={coursera} alt="co-img" />
          <img className="coursera-img-co" src={co} alt="co-img" />
        </div>
      </div>
    </div>
  );
}

export default CourseraPage;
