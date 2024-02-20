import React from "react";
import {useLocation} from "react-router-dom"

function Layout(props) {
    const location=useLocation()
    console.log(props)
    console.log(location)
  return (
    <div>
      <h1>This is the Layout Page</h1>
    </div>
  );
}

export default Layout;
