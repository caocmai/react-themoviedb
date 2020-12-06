import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

function Title() {
    return (
      <div className="Title">
        <header>
           <h1 className="site-title">Upcoming Movies</h1>
            
          <div className="Title-Subtitle">The Lastest Upcoming Movies</div>
          <NavLink
            className="nav-link"
            activeClassName="nav-link-active"
            to="/">Upcoming</NavLink>

          <NavLink
            className="nav-link"
            activeClassName="nav-link-active"
            to="/about">About</NavLink>


        </header>
      </div>
    )
  }

export default Title