import { useState, useEffect } from "react";
import { getMovies } from "../services/movies-api";
import { ListMovies } from "../components/ListMovies/ListMovies";
import { Redirect } from "react-router-dom";

export function HomeView() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getMovies().then(setMovies);
  }, [movies]);

  return (
    <div>
      <h1>Popular movies</h1>
      {movies && (
        <>
          <ListMovies movies={movies} />
        </>
      )}
    </div>
  );
}
