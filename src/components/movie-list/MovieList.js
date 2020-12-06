import React, { Component } from 'react'
import Movie from "../movie/Movie";
import './MovieList.css'

class MovieList extends Component {
    constructor(props) {
      super(props)
      this.state = {
        error: null,
        isLoaded: false,
        movies: []
      }
    }
  
    componentDidMount() {
      fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=33cff2b0fc5d808790ffb3ba68053642&language=en-US&page=1")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          this.setState({
            isLoaded: true,
            movies: result.results
          })
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
    }
  
    render() {
    const movieList = this.state.movies.map(({ title, poster_path, id}, i) => {
        return (
            <Movie 
                id={id}
                key={title}
                title={title}
                image={poster_path}
            />
        )
    })
      const { error, isLoaded, movies } = this.state
  
      if (error) {
        return <div>Error: {error.message} </div>
      } else if (!isLoaded) {
        return <div>Loading...</div>
      } else {
        return (
          <div className="MovieList">
                {movieList}
          </div>
        )
      }
    }
  
  }
  


export default MovieList;