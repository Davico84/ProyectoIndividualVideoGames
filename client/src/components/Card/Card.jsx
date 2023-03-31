import React from 'react'
import styles from "./Card.module.css"
import { Link} from "react-router-dom";
const Card = (props) => {

  return (
    <div className={styles.main}>
        <div className={styles.main_imagen}> 
            <img className={styles.main_imagen_rec} src={props.imagen} alt={props.nombre}/>
        </div>
        <div className={styles.main_data}>
            <div className={styles.main_titulo}>{props.nombre}</div>
            
            <div className={styles.main_subtitulo}>
                {props.creado===false ? props.genero.map(( el,index) =>{return <span key={index}>{el}</ span>} )
                                      : props.genero.map(( el,index) =>{return <span key={index}>{el.nombre}</ span>} )
                }
            </div>
            <div className={styles.main_boton_c}>
                    <Link className={styles.main_boton_text} to={{
                                    pathname: "/detail",
                                    state: {
                                    idCard: `${props.id}`,
                                    },
                                }}  > Detalle    
                    </Link>


                {/* <div className={styles.main_boton_text}>Detalle
                </div> */}
            </div>
        </div>
        
    </div>
  )
}

export default Card