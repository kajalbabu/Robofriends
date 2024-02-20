import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
function Header({ setSearchKey }) {
  function handleChange(e) {
    setSearchKey(e.target.value);
  }
  return (
    <div className="header">
      <div className="heading">ROBOFRIENDS</div>
      <input
        type="search"
        className="search-box"
        placeholder="Search Robot"
        onChange={handleChange}
      ></input>
      <Link to="/blogs">go</Link>
    </div>
  );
}

export default Header;
