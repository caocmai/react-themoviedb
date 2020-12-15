import React, { Component } from "react";
import Movie from "../movie/Movie";

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    const { id } = props.match.params; //movie id

    console.log(id);
    this.state = {
      id: id,
      isLoaded: false,
      result: null,
    };
  }

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/${this.state.id}?api_key=33cff2b0fc5d808790ffb3ba68053642&language=en-US`
    )
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          result: result,
        });
        // console.log(this.state.result.title);
      });
  }

  render() {
    const { isLoaded, result } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="movie-detail-section">
          <h1 className="movie-title">{result.title}</h1>
          {/* showing image according to the api's docs */}
          <img
            src={"http://image.tmdb.org/t/p/w500/"+result.poster_path}
            width='40%'
            alt='space_pic'
          />
          <p className="movie-description">{result.overview}</p>
          <a className="movie-link" href={`${result.homepage}`}>Movie Homepage</a>
        </div>
      );
    }
  }
}

export default MovieDetails;
