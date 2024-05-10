import { useEffect } from "react"; 
import { Link } from "react-router-dom"
import Pie from "../../components/Pie/Pie"
import { useLocation } from 'react-router-dom'
import {get_VideoGame_by_ID,destroyVideogame} from "../../redux/action"
import {useDispatch,useSelector} from "react-redux"
import styles from "./Detail.module.css"
import cargando from "../../images/cargando-loading-039.gif"
// import cargandosmall from "../../images/carga2.gif"

const Detail = () => {
    const location = useLocation()
    const { idCard } = location.state
    const dispatch = useDispatch();
    
    useEffect( ()=>{
        // console.log("se disparo alcerrar??");
        dispatch(get_VideoGame_by_ID(idCard));
        dispatch( destroyVideogame([]))

    },[dispatch,idCard])//array de deoendencias
    
    
    const videogame=  useSelector(state=>state.videoGame)
    
    const formateo= videogame.length ===0  
                    ?  "Cargando" 
                    : videogame[0].descripcion  
    function estrellitas(index) {
        // console.log("entro una estreilla");
        return <div key={index} className={styles.parte_1_rating_estrella}/>
    }  
   
    let starArr = [];
    let starcount=videogame.length ===0  
             ?  "undefined" 
             : videogame[0].rating
    starcount=Math.round(starcount)
 
    for (let index = 0; index < starcount; index++) {
        starArr.push(estrellitas(index))
      }              
    // let str = videogame.length ===0 ? [] : videogame[0].plataformas;
    // console.log("STER",str);
    // let arrplataform = str.split(','); 
  return (
    <>
    
        <div className={styles.main}>
        <div className={styles.content}>
        <div className={styles.main_fondo}/>
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
                    {videogame.length ===0  ?  "Cargando Datos" : videogame[0].create===false 
                                    ?videogame[0].plataformas.map(el=>{
                            return  <span key= {el.index+el}> {el} 
                                        <div  className={styles.parte_1_plataformas_linea}></div>
                                    </span>})
                                    :  videogame[0].plataformas
                                } 
                        {/* {videogame.length ===0  ?  "Cargando Datos" : videogame[0].create===false 
                                    ?videogame[0].plataformas.map(el=>{
                            return  <span key= {el.index+el}> {el} 
                                        <div  className={styles.parte_1_plataformas_linea}></div>
                                    </span>})
                                    :   arrplataform.map(el=>{
                            return  <span key= {"01"+el} id="bd"> {el} 
                                        <div  className={styles.parte_1_plataformas_linea}></div>
                                     </span>})
                                }  */}
                    </div>
                </div>
                <div className={styles.parte_1_Generos}>
                    <div className={styles.parte_1_Generos_titulo}>GÉNEROS</div>
                    <div className={styles.parte_1_Generos_texto}>
                        {videogame.length ===0  ?  "Cargando Datos" 
                                                : (videogame[0].create===false ) ? videogame[0].genres.map(el=>{
                                                     return  <span key= {el.id+el}> {el} 
                                                        <div  className={styles.parte_1_plataformas_linea}></div>
                                                    </span>})
                                                                              :videogame[0].genres.map(el=>{
                                                    return  <span key= {el.id+el}> {el.nombre} 
                                                         <div  className={styles.parte_1_plataformas_linea}></div>
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
                    <div className={styles.parte_1_rating_contenedor}>
                        <div className={styles.parte_1_rating_texto}>
                            {videogame.length ===0  ?  "Cargando Datos" : videogame[0].rating}
                        </div>
                        <div  className={styles.parte_1_rating_star}>
                            {starArr}

                        </div>
                    </div>          
                </div>

                <div  className={styles.parte_1_cuadro_boton}>
                    
                    <div className={styles.parte_1_boton_regresar}>
                            <div className={styles.main_parte1_boton}>
                        <Link to="/home"><div className={styles.ov_btn_slide_right}>Regresar</div></Link>
                         </div>
                    </div>          
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
        <div className={styles.parte4}>
            <Pie />
          </div>
        </div>
        </div>
        
    </>
  )
}

export default Detail