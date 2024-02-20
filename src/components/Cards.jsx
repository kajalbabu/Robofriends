import React, { useState } from "react";
import "./Cards.css";
import { Link } from "react-router-dom";

function Cards({ nameRobo, emailRobo, imageId, nat, registered }) {
  // const [description, setDescription] = useState(false);
  // function handleChange() {
  //   setDescription(!description);
  // }
  return (
    <div className="card-body">
      <img src={`https://robohash.org/${imageId}`} alt="Robot"></img>
      <p className="name">{nameRobo}</p>
      <p className="mail">{emailRobo}</p>
      {/* <button className="description" onClick={handleChange}>
        {description ? "Hide" : "Show"}
      </button> */}
      <Link to="/layout" state={{nat,registered}}>Go to Layout Page</Link>
      {/* {description && (
        <p className="description-body">
          {`This is a robot in ${nat}`}
          <br />
          {`registered on ${registered}`}
        </p>
      )} */}
    </div>
  );
}

export default Cards;


