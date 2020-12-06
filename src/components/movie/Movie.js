import React from 'react';
import { Link } from 'react-router-dom'

function Movie(props) {
    const { title, id, image } = props

    return (
        <div className="Movie">
            <div className="Movie-info">
                <Link to={`/details/${id}`}>

                {/* <div>{title}</div> */}
                <img src={"http://image.tmdb.org/t/p/w500/"+image} width="100%" alt="space_pic" />
                </Link>         
            </div>

        </div>
    )
}

export default Movie