import React, { Component } from 'react'
import Movie from "../movie/Movie";
import './MovieList.css'

class MovieList extends Component {
    constructor(props) {
      super(props)
      this.state = {
        movieType: props.movieType, // property is passed into component
        error: null,
        isLoaded: false,
        movies: []
      }
    }

    // helper function to capitalize first letter in word
    capitalize(str){
      return str.charAt(0).toUpperCase() + str.slice(1);
      }

    capitalizeFirstLetter(movieType) {
      switch(movieType) {
        case 'upcoming':
          return this.capitalize(movieType);
        case 'popular':
          return this.capitalize(movieType);
        case 'top_rated':
          return 'Top Rated';
        case 'now_playing':
          return "Now Playing";
        default:
          return 'movie type not valid to capitalize';
      }
    }
      
    componentDidMount() {
      // console.log(this.state.movieType)
      // this.state.movieType is passed in as property of component
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
      const { error, isLoaded, movieType } = this.state
  
      if (error) {
        return <div>Error: {error.message} </div>
      } else if (!isLoaded) {
        return <div>Loading...</div>
      } else {
        return (
          <div>
            <h1 className="section-title">{this.capitalizeFirstLetter(movieType)}</h1>
            <div className="MovieList">
                  {movieList}
            </div>
          </div>
        )
      }
    }
  
  }
  


export default MovieList;