import React from "react";

const CardAddress = ({ zipcode, street, city, suite }) => {
  return (
    <div className="card-address">
      <div className="card-address-title">
        <h3>Address</h3>
      </div>
      <div className="card-address-content">
        <p>{street}</p>
        <p>{city}, {suite} {zipcode}</p>
      </div>
    </div>
  );
};

export default CardAddress;