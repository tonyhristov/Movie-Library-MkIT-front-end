import React from "react";
import styles from "./index.module.css";

const Button = ({text}) => {
  return (
    <button type="submit" className={styles["form-button"]}>
        {text}
    </button>
  );
};

export default Button;