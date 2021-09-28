import styles from "./MovieDescription.module.css";
import { Link } from "react-router-dom";

export function MovieDescription({ movie, url, location }) {
  // console.log("location::: ", location);
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.poster}>
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt=""
          />
        </div>
        <div className={styles.details}>
          <h2>
            {movie.original_title} ({movie.release_date.slice(0, 4)})
          </h2>
          <p>User scores: {movie.vote_average}</p>
          <h4>Overview</h4>
          <p>{movie.overview}</p>
          <h4>Genres</h4>
          <ul className={styles.list}>
            {movie.genres.map(({ name, id }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.additionalInformation}>
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link
              to={{
                ...location,
                pathname: `${url}/cast`,
              }}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              to={{
                ...location,
                pathname: `${url}/reviews`,
              }}
            >
              Reviews
            </Link>
          </li>
          {/* <li>
            <Link to={`${url}/batman`}>Batman</Link>
          </li> */}
          {/* <li>
            <Link to={"/pokemon"}>Pokemon</Link>
          </li> */}
        </ul>
      </div>
    </>
  );
}
