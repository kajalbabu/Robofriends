import React, { useState } from "react";
import "./Cards.css";
function Cards({ nameRobo, emailRobo, imageId, nat, registered }) {
  const [description, setDescription] = useState(false);
  function handleChange() {
    setDescription(!description);
  }
  return (
    <div className="card-body">
      <img src={`https://robohash.org/${imageId}`} alt="Robot"></img>
      <p>{nameRobo}</p>
      <p>{emailRobo}</p>
      <button className="description" onClick={handleChange}>
        {description ? "Hide" : "Show"}
      </button>
      {description && (
        <p className="description-body">
          {`This is a robot in ${nat}`}
          <br />
          {`registered on ${registered}`}
        </p>
      )}
    </div>
  );
}

export default Cards;

// import React from "react";
// import "./Cards.css";
// import { useEffect, useState } from "react";

// function Cards({ nameRobo, emailRobo, imageId }) {
//   const [imgs, setImg] = useState([]);
//   useEffect(() => {
//     const fetchImage = async () => {
//       const imageUrl = `https://robohash.org/${imageId}`;
//       const res=await fetch(imageUrl);
//       const imageBlob=await res.blob();
//       const imageObjectURL= URL.createObjectURL(imageBlob);
//       setImg(prevImgs=>[...prevImgs,imageObjectURL]);
//     };
//     fetchImage();
//   }, [imageId]);
//   // const fetchImage = async () => {
//   //   const res = await fetch(imageUrl);
//   //   const imageBlob = await res.blob();
//   //   const imageObjectURL = URL.createObjectURL(imageBlob);
//   //   setImg(imageObjectURL);
//   // };
//   // useEffect(() => {
//   //   fetchImage();
//   // }, []);

//   return (
//     <div className="card-body">
//       {imgs.map((img,index)=>(
//           <img key={index} src={img} alt="Robot"></img>
//       ))}
//       <p>{nameRobo}</p>
//       <p>{emailRobo}</p>
//     </div>
//   );
// }

// export default Cards;
