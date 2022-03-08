import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

function Header() {
  const auth = useSelector((state) => state.auth); 

  return (
    <header>
      <div className="logo">
        <ul>
            <li><Link to='/upload'>Upload</Link></li>
            <li><Link to='/View'>View</Link></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
