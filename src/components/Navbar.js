import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <link className="navbar-brand" href="#">
        {props.title}
      </link>
      {/* <Link className="navbar-brand" to="/">
        {props.title}
      </Link> */}
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <link className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </link>
          </li>
          <li className="nav-item">
            <link className="nav-link" href="#">
              About
            </link>
          </li>
          {/* <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li> */}
        </ul>

        <div
          className={`custom-control custom-switch text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          <input
            type="checkbox"
            className="custom-control-input"
            id="customSwitch1"
            onClick={props.toggleMode}
          />
          <label
            className="custom-control-label"
            htmlFor="customSwitch1"
            id="switch"
          >
            Enable Dark Mode
          </label>
        </div>
        {/* <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-light my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form> */}
      </div>
    </nav>
  );
}
// It is a kind of a check to ensure that only string value is passed inside title
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

// It will be passed if no value is passed in title
Navbar.defaultProps = {
  title: "Navbar",
};
