import React from "react";
import { Jumbotron } from "./migration";
import "./lead.css"; // Ensure this CSS file contains the styles previously discussed

const Leadership = ({ heading, message, img }) => {
  return (
    <Jumbotron id="leadership" className="leadership-jumbotron">
      <h2 className="leadership-heading text-center">{heading}</h2>
      <div className="row leadership-content">
        <div className="col-md-5">
          <p className="lead leadership-message">{message}</p>
        </div>
        <div className="col-md-7">
          <div className="affiliation-cards-container">
            {img.map((value, index) => (
              <div key={index} className="affiliation-card">
                <img
                  src={value.img}
                  alt={value.label}
                  className="affiliation-logo"
                />
                <div className="affiliation-text">
                  <h3>{value.label}</h3>
                  <p>{value.paragraph}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Jumbotron>
  );
};

export default Leadership;
