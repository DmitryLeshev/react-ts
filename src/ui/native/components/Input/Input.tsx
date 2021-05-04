import React from "react";
import styles from "./Input.module.css";

// eslint-disable-next-line
export default (props: any) => {
  const { ...args } = props;
  return <input className={styles.input} {...args} />;
};
