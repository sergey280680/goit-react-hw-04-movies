import { useState, useEffect } from "react";
import { Route, useRouteMatch, useParams } from "react-router-dom";
import { MovieDescription } from "../components/MovieDescription/MovieDescription";
import {
  getMovieById,
  getCastById,
  getReviewsById,
} from "../services/movies-api";
import { Cast } from "components/Cast/Cast";
import { ReviewsView } from "./ReviewsView";

export function MovieDetailsView() {
  const { url, path } = useRouteMatch();
  const movieId = useParams();

  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState(null);
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getMovieById(movieId).then(setMovie);
    getCastById(movieId).then(setCast);
    getReviewsById(movieId).then(setReviews);
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <MovieDescription movie={movie} url={url} />
          <hr />
          <Route path={`${path}/cast`} exact>
            <Cast cast={cast} />
          </Route>
          <Route path={`${path}/reviews`} exact>
            <ReviewsView reviews={reviews} />
          </Route>
        </>
      )}
    </>
  );
}
