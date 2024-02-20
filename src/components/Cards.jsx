import React, { useState } from "react";
import "./Cards.css";
import { Link } from "react-router-dom";

function Cards({ nameRobo, emailRobo, imageId, nat, registered }) {
  return (
    <div className="card-body">
      <img src={`https://robohash.org/${imageId}`} alt="Robot"></img>
      <p className="name">{nameRobo}</p>
      <p className="mail">{emailRobo}</p>
      <Link
        to={"/layout"}
        state={{ nameRobo: nameRobo, nat: nat, registered: registered }}
      >
        <button className="description">Description</button>
      </Link>
    </div>
  );
}

export default Cards;
