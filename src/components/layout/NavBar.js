import React, { Component } from "react";
import { Link } from "react-router-dom";

//const NavBarStyle = styled.nav``;
export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <Link
            className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center font-weight-bold"
            to="/"
          >
            POKEDEX
          </Link>
        </nav>
      </div>
    );
  }
}
