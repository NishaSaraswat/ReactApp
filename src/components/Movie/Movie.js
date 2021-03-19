import React from 'react'
import moviestyle from "../Movie/movie.module.css";

function Movie(props) {
    return (
        <div className={moviestyle.content}>
        <h1>{props.movie.Title}</h1>
            <li>{props.movie.Year}</li>
            <li>{props.movie.Type}</li>
            <img src={props.movie.Poster} alt="moviepic" />
    </div>
    )
}
export default Movie