import React from 'react'
import  Pie from "../../components/Pie/Pie"
import styles from "./Contacto.module.css"
const Contacto = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
          <h1>Contacto </h1>
          <Pie />
        </div>
      </div>
  )
}
 
export default Contacto