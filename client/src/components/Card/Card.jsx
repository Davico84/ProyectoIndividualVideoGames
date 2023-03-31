import React from 'react'
import styles from "./Card.module.css"
const Card = (props) => {
  return (
    <div className={styles.main}>
        <div className={styles.main_foto}></div>
        <div className={styles.main_data}>
            <div className={styles.main_titulo}>{props.nombre}</div>
            <div className={styles.main_linea}/>
            <div className={styles.main_subtitulo}>
                {props.creado===false ? props.genero.map( el =>{return <span>{el}</ span>} )
                                      : props.genero.map( el =>{return <span>{el.nombre}</ span>} )
                }

            </div>
            <div className={styles.main_boton_c}>
                <div className={styles.main_boton_text}>Detalle
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Card