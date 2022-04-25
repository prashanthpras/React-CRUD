import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
      <a className="navbar-brand text-success" href="#">
        TestYantra
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Posts <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item bg-success">
            <Link className="nav-link" to="/create-post">
              Create-Post
            </Link>
          </li>
         {/*  <li className="nav-item">
            <a className="nav-link" href="#">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled">Disabled</a>
          </li> */}
        </ul>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
