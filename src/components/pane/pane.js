import React from "react";
import styles from "./pane.module.css";
const pane = props => {
  return <div className={styles.container}>{props.children}</div>;
};

export default pane;
