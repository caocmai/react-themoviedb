import React from 'react';
import { Link } from 'react-router-dom'

function Movie(props) {
    const { title, id, image } = props

    return (
        <div className="Movie">
            <Link to={`/details/${id}`}>
                <h3>Click ME</h3>
            </Link>

            <div className="Movie-info">
                <div>{title}</div>
                <img src={"http://image.tmdb.org/t/p/w185/"+image} width="10%" alt="space_pic" />
                
            </div>

        </div>
    )
}

export default Movie