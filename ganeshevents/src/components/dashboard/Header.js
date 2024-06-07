import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const activemenu = props.activeMenu;
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand" to="/">
          Ganesh Events
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li
              className={
                activemenu === "Events" ? "nav-item active" : "nav-item"
              }
            >
              <Link className="nav-link" to="/user/events">
                Events
              </Link>
            </li>
            <li
              className={
                activemenu === "Bookings" ? "nav-item active" : "nav-item"
              }
            >
              <Link className="nav-link" to="/user/bookings">
                My Bookings
              </Link>
            </li>
            <li
              className={
                activemenu === "Profile" ? "nav-item active" : "nav-item"
              }
            >
              <Link className="nav-link" to="/user/profile">
                Profile
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <b className="text-white">Hello Ganesh,</b>
            <Link className="btn btn-light ml-2" to="#">
              Logout
            </Link>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Header;
