import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/profile">
        <button>Profile</button>
      </Link>
      <Link to="/pictures">
        <button>Pictures</button>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/register">
        <button>Register</button>
      </Link>
      <Link to="/logout" onClick={() => (window.location.href = "/")}>
        <button>Logout</button>
      </Link>
    </nav>
  );
};

export default Nav;
