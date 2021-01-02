import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Title() {
  return (
    <div className='Title'>
      <header>
        <NavLink className='nav-link' to='/'>
          <h1 className='site-title'>Movies</h1>
        </NavLink>

        <NavLink 
        className='nav-link' 
        activeClassName='nav-link-active' 
        exact to='/'
        >
          Upcoming
        </NavLink>

        <NavLink
          className='nav-link'
          activeClassName='nav-link-active'
          to='/now_playing'
        >
          Now Playing
        </NavLink>

        <NavLink
          className='nav-link'
          activeClassName='nav-link-active'
          to='/popular'
        >
          Popular
        </NavLink>

        <NavLink
          className='nav-link'
          activeClassName='nav-link-active'
          to='/top_rated'
        >
          Top Rated
        </NavLink>

        <NavLink
          className='nav-link'
          activeClassName='nav-link-active'
          to='/about'
        >
          About
        </NavLink>
      </header>
    </div>
  );
}

export default Title;
