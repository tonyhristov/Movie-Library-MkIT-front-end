import React from "react";
import styles from "./index.module.css";

const Input = ({ id, placeholder, onChange, type }) => {
  return (
    <input 
    onChange={onChange} 
    type={type || "text"} 
    id={id} 
    placeholder={placeholder}
    className={styles["form-input"]}/>
  );
};

export default Input;