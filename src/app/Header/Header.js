import React from "react";
import { Link, withRouter } from "react-router-dom";

import "./header.css";
import User from "./User";

function Header(props) {
  const isActive = (path) => {
    return props.location.pathname === path ? "active" : "";
  };
  return (
    <header>
      <h1>Unsplash</h1>
      <div className="links-container">
        <Link className={isActive("/")} to="/">
          Home
        </Link>
        <Link className={isActive("/random-image")} to="/random-image">
          Random Image
        </Link>
        <Link className={isActive("/result")} to="/result">
          Result
        </Link>
      </div>
      <User />
    </header>
  );
}

export default withRouter(Header);
