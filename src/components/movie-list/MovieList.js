import React, { Component } from 'react'
import Movie from "../movie/Movie";
import './MovieList.css'

class MovieList extends Component {
    constructor(props) {
      super(props)
      // this.movieType = props.test
      this.state = {
        movieType: props.movieType,
        error: null,
        isLoaded: false,
        movies: []
      }
    }
  
    componentDidMount() {
      // console.log(this.state.movieType)
      fetch(`https://api.themoviedb.org/3/movie/${this.state.movieType}?api_key=33cff2b0fc5d808790ffb3ba68053642&language=en-US&page=1`)
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
    const movieList = this.state.movies.map(({ title, poster_path, id, overview}, i) => {
        return (
            <Movie 
                id={id}
                key={title}
                title={title}
                image={poster_path}
                overview={overview}
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