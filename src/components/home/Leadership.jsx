import React from "react";
import { Jumbotron } from "./migration";

const Leadership = ({ heading, message, img }) => {
  return (
    <Jumbotron
      id="leadership"
      className="m-0"
      style={{ backgroundColor: "white" }}
    >
      <h2 className="display-4 pb-5 text-center">{heading}</h2>
      <div className="row">
        <div className="col-md-5">
          <p className="lead">{message}</p>
        </div>
        <div className="col-md-7">
          {img.map((value, index) => (
            <div key={index} className="d-flex align-items-center mb-3">
              <img
                src={value.img}
                alt={value.label}
                style={{ 
                  width: "100px", 
                  height: "100px", 
                  objectFit: "cover", 
                  marginRight: "20px" // You can adjust the value as needed
                }}
              />
              <div style={{ marginLeft: "20px" }}> {/* Added margin to the text container */}
                <h3>{value.label}</h3>
                <p>{value.paragraph}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Jumbotron>
  );
};

export default Leadership;
