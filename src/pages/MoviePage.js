import React, { useEffect, useState } from "react";
import "./MoviePage.css";
import MovieGenreContainer from "../components/MovieGenreContainer/MovieGenreContainer";
import superApp from "../assets/images/superApp.png";
import profile from "../../src/assets/images/smallProfile.png"

function MoviePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const storedArray = JSON.parse(localStorage.getItem("selectedCards"));
    if (storedArray) {
      setMovies(storedArray);
    }
  }, []);

  console.log(movies);

  return (
    <div className="parent__movie">
      <div className="top">
        <img src={superApp} alt="superApp" />
        <img src={profile} alt="display_picture" id="profile__icon" />
      </div>
      <div className="movie__text">Entertainment according to your choice</div>
      <div className="container__parent">
        {movies.map((movie, index) => {
          return <MovieGenreContainer key={index} title={movie} />
        })}
      </div>
    </div>
  );
}

export default MoviePage;
