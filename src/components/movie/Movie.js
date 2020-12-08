import React from 'react';
import { Link } from 'react-router-dom'

function Movie(props) {
    const { title, id, image, overview } = props
    const MAX_LENGTH = 250

    return (
        <div className="Movie">
            <div className="Movie-info">
                <Link to={`/movie_details/${id}`}>
                <img src={"http://image.tmdb.org/t/p/w500/"+image} width="100%" alt="space_pic" />
                </Link>    
                <div className="movieOverview">{`${overview.substring(0, MAX_LENGTH)}...`}</div>     
            </div>

        </div>
    )
}

export default Movie