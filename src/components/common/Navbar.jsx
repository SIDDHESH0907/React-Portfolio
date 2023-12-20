import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <img className="navbar-logo" src="./assets/logo.png" alt="Logo" />
      </div>

      <div className="navbar-right">
        <div className="menu">
          <ul className="menu-list">
            <NavLink to="/" activeClassName="active" className="list">
              <div>
                <AiOutlineHome />
              </div>
              <div>Home</div>
            </NavLink>

            <NavLink to="/about" activeClassName="active" className="list">
              <div>
                <AiOutlineUser />
              </div>
              <div> About</div>
            </NavLink>

            <NavLink to="/projects" activeClassName="active" className="list">
              <div>
                <AiOutlineFundProjectionScreen />
              </div>
              <div> Projects</div>
            </NavLink>

            <NavLink to="/resume" activeClassName="active" className="list">
              <div>
                <CgFileDocument />
              </div>
              <div>Resume</div>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
