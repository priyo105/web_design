/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function NavBar() {
  return (
    <div>
      <div class="navbar">
        <div class="nav-logo">
          <img src="./logo.png" alt="" />
        </div>
        <div class="nav-items">
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
        <div class="nav-button">
          <div class="anim-layer"></div>
          <a href="#" class="nav-button-font">
            Sign Up
          </a>
        </div>
        <div id="hamburger-menu">&#9776;</div>
      </div>
    </div>
  );
}

export default NavBar;
