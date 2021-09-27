import styles from "./Cast.module.css";

export function Cast({ cast }) {
  return (
    <>
      <h2>Cast</h2>
      <ul className={styles.list}>
        {cast.map(({ id, profile_path, name }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${profile_path}`}
              alt=""
            />
            <p>{name}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
