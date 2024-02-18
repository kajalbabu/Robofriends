import React from "react";
import Cards from "./Cards";
import "./CardsList.css";

function CardsList({ filteredData }) {
  // const[scroll,setScroll]=useState()
  //   useEffect(()=>{
  //     window.addEventListener("scroll",(e) => {
  //       const test= e.clientWidth
  //       setScroll(test)

  //     })
  //   },[window])
  // console.log(scroll)

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
