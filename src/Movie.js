import React from "react";
import propTypes from "prop-types";
import "./Movie.css";

function Movie({ year, title, summary, poster, genres }) {
  return (
    <div className={"movie"}>
      <img src={poster} alt={title} title={title} />
      <div className={"movie_data"}>
        <div className={"movies_movie"}>
          <h3 className={"movie_title"}>{title}</h3>
          <ul className={"movie_genres"}> {genres.map((genre, index) => (
              <li key={index} className={"genres_gens"}>{genre}</li>
          ))} </ul>
          <h5 className={"movie_year"}>{year}</h5>
          <p className={"movie_summary"}>{summary.slice(0, 140)}</p>
        </div>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  year: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  poster: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Movie;
