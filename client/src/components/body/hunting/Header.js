import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import './header2.css';

function Header2() {
  const auth = useSelector((state) => state.auth); 

  return (
    <header className="sub_header">
      <div className="logo">
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/View'>View</Link></li>
            <li><Link to="/Agent">Agent</Link></li>
        </ul>
      </div>
    </header>
  );
}

export default Header2;
