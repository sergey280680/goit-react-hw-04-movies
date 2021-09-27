import styles from "./WrapperViews.module.css";

export function WrapperViews({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}
