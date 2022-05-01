import React from "react";
import CardAddress from "./CardAddress";

const Card = ({ name, email, id, address }) => {
  return (
    <div>
      <img alt="robots" src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
        <CardAddress {...address} />
      </div>
    </div>
  );
};

export default Card;
