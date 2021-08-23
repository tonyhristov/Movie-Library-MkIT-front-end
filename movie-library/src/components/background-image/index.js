import React from "react";
import styles from "./index.module.css";

const ImageBackground = (props) => {
  return <div className={styles[`${props.page}`]}>{props.children}</div>;
};

export default ImageBackground;