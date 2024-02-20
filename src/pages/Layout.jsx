import React from "react";
import { useLocation } from "react-router-dom";
import "./Layout.css";

function Layout(props) {
  const location = useLocation();
  console.log(location);
  return (
    <div className="description-head">
      <h1 className="description-body">
        {`${location.state.nameRobo} is a robot in ${location.state.nat} registered on ${location.state.registered}`}
      </h1>
    </div>
  );
}

export default Layout;
