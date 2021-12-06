import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <>
      <div className="container-header">
        <h1 className="container-title">CRUD APP</h1>
        <ul className="list-page">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/*" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
