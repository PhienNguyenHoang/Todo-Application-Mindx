import React from "react";
import "../App.scss";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="Navbar-wrapper">
      <Link to="/" className="logo">
        <a>
          TODO
        </a>
      </Link>
    </div>
  );
}
export default Navbar;
