import styles from "./FallbackPage.module.css";
import React from "react";
import { Triangle } from "react-loader-spinner";

const FallbackPage = () => {
  return (
    <div className={styles.container}>
      <Triangle
        height="80"
        width="80"
        color="#d60100"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default FallbackPage;
