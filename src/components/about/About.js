import React from 'react'

function About() {
  return (
    <div className="about-section" >
      <h1 className="movie-title">About Movies</h1>
      <p className="movie-description">Showing movies' poster image and its description by various categories. Link to the 
        <a className="movie-link" href="https://developers.themoviedb.org/3/getting-started/introduction"> API Docs</a>
        </p>
    </div>
  )
}

export default About