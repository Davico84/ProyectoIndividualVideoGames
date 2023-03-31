import React from 'react'
import styles from "./Paginado.module.css"
const Paginado = () => {
  return (
    <>
            {/* <input type="button" onClick={FirstPage} value="First"/>  
            <button onClick={PrevPage}> Prev </button>
            <label>{props.pagina}</label> <p>de {props.maximo}</p> 
            <button onClick={NextPage}>Next</button>
            <button onClick={LastPage}>Last</button> */}
            <div className={styles.cuerpo_navegacion_botones}>
              <input className={styles.boton_first} type="button" title="First"/>  
              <input className={styles.boton_prev} type="button" title="Prev"/>  
              <label className={styles.caja}> 1</label> 
                <p className={styles.caja2}>de </p> 
              <label className={styles.caja}>xx</label>
              <input className={styles.boton_next} type="button" title="Next"/>  
              <input className={styles.boton_last} type="button" title="Last"/>  
            </div>
    </>
  )
}

export default Paginado