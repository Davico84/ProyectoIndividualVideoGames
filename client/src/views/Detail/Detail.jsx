import { useEffect } from "react"; 
import Pie from "../../components/Pie/Pie"
import { useLocation } from 'react-router-dom'
import {get_VideoGame_by_ID} from "../../redux/action"
import {useDispatch,useSelector} from "react-redux"
import styles from "./Detail.module.css"
import cargando from "../../images/cargando-loading-039.gif"
const Detail = () => {
    const location = useLocation()
    const { idCard } = location.state
    const disptach = useDispatch();
    
    useEffect( ()=>{
        // console.log("se disparo al crear");
        disptach(get_VideoGame_by_ID(idCard));
        
    },[disptach,idCard])//array de deoendencias
    
    
    const videogame=  useSelector(state=>state.videoGame)
    // console.log("este es valo de videogame", videogame);
    // var ratingcount= (videogame.length===0) ? "no hay datis" 
    //                                     :Math.round(videogame[0].rating).length
    const formateo= videogame.length ===0  
                    ?  "sin datos" 
                    : videogame[0].descripcion    
  return (
    <>
    
        <div className={styles.main}>
        
            <div className={styles.main_parte_1}>
                <div className={styles.parte_1_difu}/>
                <img className={styles.parte_1_fondo_game} 
                            src={videogame.length ===0  ?  "Cargando" :videogame[0].image}
                            alt={videogame.length ===0  ?  "Cargando" :videogame[0].nombre}/>  
                <div  className={styles.parte_1_cabecera}>
                    <div className={styles.parte_1_cabecera_titulo}>
                        {videogame.length ===0  ? <img src={cargando} alt="cargando"/> :videogame[0].nombre}
                    </div>
                    <div className={styles.parte_1_cabecera_subtitulo}>
                        {videogame.length ===0  ?  "Cargando Datos" :videogame[0].id}
                    </div>
                </div>
                <div className={styles.parte_1_plataformas}>
                    <div className={styles.parte_1_plataformas_titulo}>PLATAFORMAS</div>
                    <div className={styles.parte_1_plataformas_texto}>
                        {videogame.length ===0  ?  "Cargando Datos" :videogame[0].plataformas.map(el=>{
                            return  <span key= {el.id}> {el} 
                                        <div key= {el.id} className={styles.parte_1_plataformas_linea}></div>
                                    </span>})}
                    </div>
                </div>
                <div className={styles.parte_1_Generos}>
                    <div className={styles.parte_1_Generos_titulo}>GÉNEROS</div>
                    <div className={styles.parte_1_Generos_texto}>
                        {videogame.length ===0  ?  "Cargando Datos" 
                                                : (videogame[0].create===false ) ? videogame[0].genres.map(el=>{
                                                     return  <span key= {el.id}> {el} 
                                                        <div key= {el.id} className={styles.parte_1_plataformas_linea}></div>
                                                    </span>})
                                                                              :videogame[0].genres.map(el=>{
                                                         return  <span key= {el.id}> {el.nombre} 
                                                            <div  key= {el.id}className={styles.parte_1_plataformas_linea}></div>
                                                        </span>})
                                                    }
                    </div>
                </div>
                <div  className={styles.parte1_feclan}>
                    <div className={styles.parte1_feclan_titulo}> Fecha de lanzamiento</div>
                    <div className={styles.parte1_feclan_fecha}>
                            {videogame.length ===0  ?  "Cargando Datos" : videogame[0].fecLan}
                    </div>
                </div>

                <div  className={styles.parte_1_rating}>
                    <div className={styles.parte_1_rating_titulo}> Rating</div>
                    <div className={styles.parte_1_rating_estrellas}>
                     {videogame.length ===0  ?  "Cargando Datos" : videogame[0].rating}
                    </div>
                    
                    {/* <div className={styles.parte1_feclan_fecha}>
                            {videogame.length ===0  ?  "Cargando Datos" 
                                                    :  
                                                    
                            }
                    </div> */}
                </div>

            </div>
            <div className={styles.main_parte_2}>
                    <div className={styles.main_parte_2_cuadro_}>
                        <div className={styles.main_parte_2_titulo}>Descripción </div>
                        <div className={styles.main_parte_2_cuadro_detalle}>
                        
                            <div dangerouslySetInnerHTML={{__html: formateo}} className={styles.main_parte_2_texto}> 
                                {/* {videogame.length ===0  ?  "Cargando Datos" : videogame[0].descripcion} */}
                            </div>
                        </div>

                    </div>
            </div>
        </div>
        <Pie/>
    </>
  )
}

export default Detail