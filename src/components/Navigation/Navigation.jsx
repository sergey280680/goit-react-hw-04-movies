import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

export function Navigation() {
  return (
    <nav className={styles.header}>
      <NavLink
        exact
        to="/"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Movies
      </NavLink>
      <NavLink
        to="/pokemon"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Pokemon
      </NavLink>
    </nav>
  );
}
