import React, { Component } from 'react'
import Movie from '../movie/Movie';


class MovieDetails extends Component {
    constructor(props) {
        super(props)
      const { id } = props.match.params // Location index

      console.log(id)
      this.state = {
        id: id,
        isLoaded: false,
        result: null

      }
    }

    componentDidMount() {
        // console.log(id)
        console.log(this.state.result)


            fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=33cff2b0fc5d808790ffb3ba68053642&language=en-US`)
      .then(res => res.json())
      .then(
        (result) => {
        this.setState(
            {
                isLoaded: true,
                result: result
            }
        )
        console.log(this.state.result.title)
        }
      )
        

      }

      render() {
          const { isLoaded, result } = this.state
              if (!isLoaded) {
                return <div>Loading...</div>
              } else {
                  return (
                    <div>
                        <h1>{result.title}</h1>
                        <img src={"http://image.tmdb.org/t/p/w500/"+result.poster_path} width="40%" alt="space_pic" />
                    </div>
                  )
              }
      }
  
}


export default MovieDetails