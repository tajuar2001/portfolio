import React from 'react';
import { Col } from "react-bootstrap";
import './styles.css';

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="6">
      <div className="pb-5 text-center">
        <img className="logo bg-white mb-3" src={data.companylogo} alt={`${data.company} logo`} />
        <h4>{data.company}</h4>
        <p className="lead">
          {data.role}
          <br />
          {data.date}
        </p>
        <p>{data.description}</p>
      </div>
    </Col>
  );
}

export default ExperienceCard;

