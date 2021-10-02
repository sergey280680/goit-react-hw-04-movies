import { useState, useEffect } from "react";
import {
  Switch,
  Route,
  useRouteMatch,
  useParams,
  useLocation,
  useHistory,
  Redirect,
} from "react-router-dom";
import { MovieDescription } from "../components/MovieDescription/MovieDescription";
import {
  getMovieById,
  getCastById,
  getReviewsById,
} from "../services/movies-api";
import { Cast } from "components/Cast/Cast";
import { ReviewsView } from "./ReviewsView";
import { SpinnerLoader } from "../components/Spinner/Spinner";
// import { NotFoundView } from "./NotFoundView";

// ===========================================
// ===========================================

export function MovieDetailsView() {
  const { url, path } = useRouteMatch();
  const movieId = useParams();
  const history = useHistory();
  const location = useLocation();

  const handleGoBack = () => {
    // console.log("location: ", location);
    history.push(location.state?.from ? location.state.from : "/");
  };

  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const movie = async () => {
      setStatus("pending");

      await getMovieById(movieId).then((el) => {
        if (el) {
          setMovie(el);
          setStatus("resolved");
        } else {
          return setStatus("rejected");
        }
      });
    };
    getCastById(movieId).then(setCast);
    getReviewsById(movieId).then(setReviews);

    movie();
  }, [movieId]);

  return (
    <>
      <button onClick={handleGoBack}>Go Back</button>
      {status === "pending" && <SpinnerLoader />}
      {status === "rejected" && <Redirect to="/404" />}
      {status === "resolved" && (
        <>
          <MovieDescription movie={movie} url={url} location={location} />
          <hr />
          <Switch>
            <Route path={`${path}/cast`} exact>
              <Cast cast={cast} />
            </Route>
            <Route path={`${path}/reviews`} exact>
              <ReviewsView reviews={reviews} />
            </Route>
          </Switch>
        </>
      )}
    </>
  );
}
