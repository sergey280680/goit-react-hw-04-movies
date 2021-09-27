// import { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { useState } from "react";
import { getSearchMovie } from "../services/movies-api";
import { ListMovies } from "../components/ListMovies/ListMovies";
import { FormSearch } from "components/FormSearch/FormSearch";

export function MoviesView() {
  const { url } = useRouteMatch();

  const [movieQuery, setMovieQuery] = useState("");
  const [movies, setMovies] = useState(null);

  const handleSabmit = (e) => {
    e.preventDefault();

    getSearchMovie({ movieQuery }).then(setMovies);

    setMovieQuery("");
  };

  const handleNameChange = (event) => {
    setMovieQuery(event.currentTarget.value.toLowerCase());
  };

  return (
    <>
      <FormSearch
        handleNameChange={handleNameChange}
        handleSabmit={handleSabmit}
        movieQuery={movieQuery}
      />

      {movies && (
        <>
          <hr />
          <ListMovies movies={movies} url={url} />
        </>
      )}
    </>
  );
}
