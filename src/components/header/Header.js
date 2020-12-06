import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

function Title() {
    return (
      <div className="Title">
        <header>
        <NavLink
            className="nav-link"
            activeClassName="nav-link-active"
            to="/"><h1>Upcoming Movies</h1></NavLink>
          
          <div className="Title-Subtitle">The Lastest Upcoming Movies</div>
  
          {/* <NavLink
            className="nav-link"
            activeClassName="nav-link-active"
            exact
            to="/">List</NavLink> */}

          <NavLink
            className="nav-link"
            activeClassName="nav-link-active"
            to="/about">About</NavLink>


        </header>
      </div>
    )
  }

export default Title