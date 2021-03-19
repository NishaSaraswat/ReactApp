import React from "react";
import Movie from "../Movie/Movie.js";
import movieListStyle from "../MovieList/movielist.module.css";

function MovieList(props) {
  return (
    <div className={movieListStyle.movielist}>
      {props.movies.map((movie, index) => (
        <div key={index}>
          <br />

          <Movie movie={movie} />
        </div>
      ))}
    </div>
  );
}
export default MovieList;
