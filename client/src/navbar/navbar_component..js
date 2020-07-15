import React, { Component } from "react";
import { Link } from "react-router-dom";  
import Group from '../components/Group.svg';

import "./navbar_component.scss"

class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
      <div className="navContainer">
          <img src='nict_favicon.png' alt="logo" />
          <img className="groupNavbar" src={Group} alt="nict" />
          <div className="navHeader">
              <ul>
                  <li>Home</li>
                  <li>Programs</li>
                  <li>About us</li> 

              </ul>
          </div>
      </div>
  </React.Fragment>
    );
  }
}

export default Navbar;
