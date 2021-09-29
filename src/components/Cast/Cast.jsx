import styles from "./Cast.module.css";

export function Cast({ cast }) {
  return (
    <>
      <h2>Cast</h2>
      <ul className={styles.list}>
        {cast.map(({ id, profile_path, name }) => (
          <li key={id}>
            <div className={styles.thumb}>
              <img
                className={styles.img}
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200${profile_path}`
                    : "https://lh3.googleusercontent.com/proxy/2BeK-LD8xraTpjXOXyLpmJGmrl1zeKfmioFPH47l-F6ybeiIHh84gUfkOEGyh55seEdtCbJL2kLxd3vuCj8cJeUP6aVl39xQ0uzHOUA"
                }
                alt=""
              />
            </div>
            <p>{name}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
