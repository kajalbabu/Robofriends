import React from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
function Header({ setSearchKey }) {
  const location = useLocation();
  function handleChange(e) {
    setSearchKey(e.target.value);
  }
  return (
    <div className="header">
      <div className="heading">ROBOFRIENDS</div>
      {location.pathname !== "/layout" && (
        <input
          type="search"
          className="search-box"
          placeholder="Search Robot"
          onChange={handleChange}
        ></input>
      )}
      {location.pathname === "/layout" && (
        <Link to="/blogs">
          <button className="homeButton">Home</button>
        </Link>
      )}
    </div>
  );
}

export default Header;
