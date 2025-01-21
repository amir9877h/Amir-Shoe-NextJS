import React from "react";
import styles from "./custom-loading.module.css";

const CustomLoading = ({ message }: { message: string }) => {
  return (
    <div className={styles.loadingOverlay}>
      <div className={styles.loadingGlassContainer}>
        <div className={styles.loadingSpinner}>
          <div className={styles.spinnerRing}></div>
        </div>
        <h3>{message}</h3>
        <button className={styles.cancelButton}>Cancel</button>
      </div>
    </div>
  );
};

export default CustomLoading;
