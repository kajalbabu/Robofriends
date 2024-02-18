import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import "./CardsList.css";


function CardsList({ filteredData }) {
  

  return (
    <div className="card-list">
      {filteredData.map((item) => {
        return (
          <Cards
            key={item.name}
            nameRobo={item.name}
            emailRobo={item.email}
            imageId={item.name}
            nat={item.nat}
            registered={item.registered}
          />
        );
      })}
    </div>
  );
}

export default CardsList;
