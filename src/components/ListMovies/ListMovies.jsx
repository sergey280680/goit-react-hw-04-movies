import { Link } from "react-router-dom";

export function ListMovies({ movies }) {
  return (
    <ul>
      {movies.map(({ name, id, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`}>{name || title}</Link>
        </li>
      ))}
    </ul>
  );
}
