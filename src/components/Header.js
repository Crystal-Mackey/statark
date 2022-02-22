import { Link } from "react-router-dom";
import React from "react";

const Header = () => {
  return (
    <div className="sidenav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/maps">Maps</Link>
        </li>
        <li>
          <Link to="/input">Dino Input</Link>
        </li>
        <li>
          <Link to="/library">Library</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;



