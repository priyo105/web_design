/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function NavBar() {
  return (
    <div>
      <div className="navbar">
        <div className="nav-logo">
          <img src="./logo.png" alt="" />
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <a href="#"> Dashboard </a>
            </li>
            <li>
              <a href="#"> Reports </a>
            </li>
            <li>
              <a href="#"> Documents </a>
            </li>
            <li>
              <a href="#"> History </a>
            </li>
            <li>
              <a href="#"> Settings </a>
            </li>
          </ul>
        </div>
        <div className="nav-button">
          <div className="anim-layer"></div>
          <a href="#" className="nav-button-font">
            Sign Up
          </a>
        </div>
        <div id="hamburger-menu">&#9776;</div>
      </div>
    </div>
  );
}

export default NavBar;
