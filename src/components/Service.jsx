import React from "react";

const Service = ({ service }) => {
  return (
    <div>
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <p>Cost: ${service.cost}</p>
    </div>
  );
};

export default Service;
