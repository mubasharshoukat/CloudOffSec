import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

function Header() {
  const auth = useSelector((state) => state.auth);

  const { user, isLogged } = auth;

  const handleLogout = async () => {
    try {
      await axios.get("/user/logout");
      localStorage.removeItem("firstLogin");
      window.location.href = "/";
    } catch (err) {
      window.location.href = "/";
    }
  };

  const userLink = () => {
    return (
      <li className="drop-nav">
        <Link to="#" className="avatar">
          <img src={user.avatar} alt="" /> {user.name}{" "}
          <i className="fas fa-angle-down"></i>
        </Link>
        <ul className="dropdown">
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/" onClick={handleLogout}>
              Logout
            </Link>
          </li>
        </ul>
      </li>
    );
  };

  const transForm = {
    transform: isLogged ? "translateY(-5px)" : 0,
  };

  return (
    <header>
      <div className="logo">
        <h1>
          <Link to="/">CLOUD OFFSEC</Link>
        </h1>
      </div>
      <ul style={transForm}>
        {
          isLogged
          ? <li><Link to='/hunting'>Hunting</Link></li>
          : <li><Link to=''>About Us</Link></li>
        }
        
        {
          isLogged
          ? <li><Link to=''>Auditing</Link></li>
          : <li><Link to='/register'>Register</Link></li>
        }
        {
          isLogged
          ? <li><Link to=''>Analytics</Link></li>
          : <li><Link to=''>Services</Link></li>
        }
        {
            isLogged
            ? userLink()
            : <li><Link to="/login">Sign in</Link></li>
        }
      </ul>
    </header>
  );
}

export default Header;
