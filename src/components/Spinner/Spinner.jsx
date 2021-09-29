import Loader from "react-loader-spinner";
import styles from "./Spinner.module.css";

export function SpinnerLoader() {
  return (
    <div className={styles.spinner}>
      <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={80}
        width={80}
        timeout={3000}
      />
    </div>
  );
}
