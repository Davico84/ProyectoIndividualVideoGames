import React from 'react'
import styles from "./NoFoundCard.module.css"
const NoFoundCard = (props) => {
  // console.log("estes es el error de props", props.error)
  return (
    <div className={styles.main}>

      <div className={styles.titulo}>
            Advertencia :
           
      </div>
      <div className={styles.detalle}>
      {props.error.error}
                <div className={styles.gif}></div>
             </div>
    </div>
  )
}

export default NoFoundCard