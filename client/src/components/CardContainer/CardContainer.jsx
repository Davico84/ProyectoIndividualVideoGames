import React from 'react'
import styles from "./CardContainer.module.css"
import Card from "../Card/Card"
import NoFoundCard from "../NoFoundCard/NoFoundCard"

const CardContainer = (props) => {

  if(props.error!=="NULL")
  {  
      console.log("CAPTURANDO ERROR SERVIDOR");
      return(
          <div className={styles.main_error}>
               <NoFoundCard error={props.error}/> 
          </div>
      ) 

  } 
  return (
  <> 
    <div className={styles.main}>
    {   
             props.videogames.length ===0 
                ?  <NoFoundCard error={{error:"No se encontraron Registros"}}/>
                : props.videogames.slice(
                        (props.pagina-1)*props.porPagina,
                        (props.pagina-1)*props.porPagina+props.porPagina)
                    .map(videogame=>{
                    return <Card
                                id={videogame.id}
                                key={videogame.id}
                                nombre={videogame.nombre} 
                                genero={videogame.genres} 
                                imagen={videogame.image}
                                creado={videogame.create}
                            /> 
                })        
    }
    </div>
  </>
  )
}

export default CardContainer