import React from "react";
import Pie from "../../components/Pie/Pie";
import styles from "./Acerca.module.css";
const Acerca = () => {
  return (
    
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Acerca de ... </h1>
          <Pie />
        </div>
      </div>
    
  );
};

export default Acerca;
