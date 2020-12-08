import React from 'react'

function About() {
  return (
    <div className="about-section" >
      <h1 className="movie-title">About Movies</h1>
      <p className="movie-description">Showing all the movies about to be released. Link to the 
        <a className="movie-link" href="https://developers.themoviedb.org/3/getting-started/introduction"> API Docs</a>
        </p>
    </div>
  )
}

export default About